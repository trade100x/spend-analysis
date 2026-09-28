// Cloudflare Worker: serves the static site plus a few JSON APIs.
//   POST /api/subscribe   early-access signups -> KV (list: npx wrangler kv key list --binding SUBSCRIBERS --remote)
//   GET  /api/prices      monthly closes for every company (refreshed daily by cron from Yahoo Finance; falls back to /prices.json)
//   GET  /api/lookup?q=   who owns a brand, and whether that owner is listed (Wikidata), cached 30 days

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
const json = (data, status = 200, extra = {}) =>
  new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json", ...CORS, ...extra } });
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const UA = "SpendAnalysis/1.0 (https://spend-analysis.madmarketagents.workers.dev)";

/* ---------- Prices ---------- */
const SPECIAL = { "ENBD.DFM": "EMIRATESNBD.AE" };
const yahoo = t => SPECIAL[t] || (t.endsWith(".DFM") ? t.slice(0, -4) + ".AE" : t);
async function refreshPrices(env) {
  const base = await (await env.ASSETS.fetch(new Request("https://assets.local/prices.json"))).json();
  const tickers = Object.keys(base.s);
  const out = {};
  for (let i = 0; i < tickers.length; i += 20) {   // ~16 requests, under the free-plan subrequest limit
    const batch = tickers.slice(i, i + 20);
    const url = "https://query1.finance.yahoo.com/v8/finance/spark?symbols=" + batch.map(t => encodeURIComponent(yahoo(t))).join(",") + "&range=3y&interval=1mo";
    try {
      const d = await (await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })).json();
      for (const t of batch) {
        const v = d[yahoo(t)] || {};
        const pts = (v.timestamp || []).map((ts, j) => [ts, v.close?.[j]]).filter(p => p[1]).map(([ts, c]) => [ts, +c.toPrecision(5)]);
        if (pts.length >= 2) out[t] = pts;
      }
    } catch (e) { /* keep going; missing symbols fall back to the static file */ }
  }
  if (Object.keys(out).length > tickers.length * 0.8) {
    await env.SUBSCRIBERS.put("cache:prices", JSON.stringify({ asof: new Date().toISOString().slice(0, 10), source: "Yahoo Finance monthly closes", s: { ...base.s, ...out } }));
  }
}

/* ---------- Ownership lookup (Wikidata) ---------- */
// Exchange label -> [our exchange code, ticker suffix, region]; order = preference when a company lists in several places
const EX = [
  ["Nasdaq", "NASDAQ", "", "AM"], ["New York Stock Exchange", "NYSE", "", "AM"], ["Tokyo Stock Exchange", "TSE", ".T", "AP"],
  ["London Stock Exchange", "LSE", ".L", "EU"], ["Euronext Paris", "Euronext PAR", ".PA", "EU"], ["Euronext Amsterdam", "Euronext AMS", ".AS", "EU"],
  ["Frankfurt Stock Exchange", "XETRA", ".DE", "EU"], ["Xetra", "XETRA", ".DE", "EU"], ["SIX Swiss Exchange", "SIX", ".SW", "EU"],
  ["Borsa Italiana", "Borsa Italiana", ".MI", "EU"], ["Bolsa de Madrid", "BME", ".MC", "EU"], ["Nasdaq Stockholm", "Nasdaq STO", ".ST", "EU"],
  ["Nasdaq Copenhagen", "Nasdaq CPH", ".CO", "EU"], ["Nasdaq Helsinki", "Nasdaq HEL", ".HE", "EU"], ["Korea Exchange", "KRX", ".KS", "AP"],
  ["Taiwan Stock Exchange", "TWSE", ".TW", "AP"], ["Hong Kong Stock Exchange", "HKEX", ".HK", "AP"], ["Shenzhen Stock Exchange", "SZSE", ".SZ", "AP"],
  ["Shanghai Stock Exchange", "SSE", ".SS", "AP"], ["National Stock Exchange of India", "NSE", ".NS", "AP"], ["Bombay Stock Exchange", "BSE", ".BO", "AP"],
  ["Australian Securities Exchange", "ASX", ".AX", "AP"], ["Singapore Exchange", "SGX", ".SI", "AP"], ["Indonesia Stock Exchange", "IDX", ".JK", "AP"],
  ["Toronto Stock Exchange", "TSX", ".TO", "AM"], ["B3", "B3", ".SA", "AM"], ["Saudi Exchange", "Tadawul", ".SR", "ME"], ["Tadawul", "Tadawul", ".SR", "ME"],
  ["Dubai Financial Market", "DFM", ".DFM", "ME"], ["Abu Dhabi Securities Exchange", "ADX", ".AD", "ME"],
];
// Index funds and asset managers show up as "owners" on Wikidata; they aren't what we mean by owner
const FUND_HOLDERS = new Set(["BlackRock", "The Vanguard Group", "Vanguard Group", "State Street Corporation", "Fidelity Investments", "Capital Group Companies", "Berkshire Hathaway"]);
const COMPANYISH = /(company|corporation|service|app|application|platform|brand|streaming|video game|game|retail|chain|airline|software|website|marketplace|network|manufacturer|subsidiary|business|restaurant|bank|operator|provider|studio|franchise|product)/i;

async function lookup(env, q) {
  const key = "cache:lookup:" + q.toLowerCase().slice(0, 80);
  const hit = await env.SUBSCRIBERS.get(key, "json");
  if (hit) return hit;
  const s = await (await fetch(`https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(q)}&language=en&format=json&limit=6&type=item`, { headers: { "User-Agent": UA } })).json();
  const cands = (s.search || []).filter(c => COMPANYISH.test(c.description || "")).slice(0, 3);
  if (!cands.length) { const res = { q, found: false }; await env.SUBSCRIBERS.put(key, JSON.stringify(res), { expirationTtl: 7 * 86400 }); return res; }
  const values = cands.map(c => "wd:" + c.id).join(" ");
  const sparql = `SELECT ?item ?site ?owner ?ownerLabel ?ownerSite ?exLabel ?ticker WHERE {
    VALUES ?item { ${values} }
    OPTIONAL { ?item wdt:P856 ?site }
    OPTIONAL {
      ?item (wdt:P127|wdt:P749|wdt:P123|wdt:P178)* ?owner .
      ?owner p:P414 ?st . ?st ps:P414 ?ex . FILTER NOT EXISTS { ?st pq:P582 ?end }
      OPTIONAL { ?st pq:P249 ?ticker } OPTIONAL { ?owner wdt:P856 ?ownerSite }
    }
    SERVICE wikibase:label { bd:serviceParam wikibase:language "en". } } LIMIT 60`;
  let rows = [];
  try {
    const r = await fetch("https://query.wikidata.org/sparql?format=json&query=" + encodeURIComponent(sparql), { headers: { "User-Agent": UA, Accept: "application/sparql-results+json" } });
    rows = (await r.json()).results.bindings;
  } catch (e) { return { q, found: false, error: "lookup unavailable" }; }
  const domain = u => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return ""; } };
  for (const c of cands) {
    const mine = rows.filter(b => b.item.value.endsWith("/" + c.id));
    const owners = {};
    for (const b of mine) {
      if (!b.owner || !b.ticker) continue;
      const name = b.ownerLabel.value; if (FUND_HOLDERS.has(name)) continue;
      const ex = EX.findIndex(e => e[0] === b.exLabel.value); if (ex < 0) continue;
      const [, code, suf, region] = EX[ex];
      let t = b.ticker.value.trim().toUpperCase(); if (suf === ".HK") t = t.padStart(4, "0");
      const o = { name, ticker: t + suf, exchange: code, region, site: domain(b.ownerSite?.value || ""), rank: ex };
      if (!owners[name] || owners[name].rank > ex) owners[name] = o;
    }
    const res = { q, found: true, qid: c.id, name: c.label, description: c.description || "", site: domain(mine.find(b => b.site)?.site.value || ""),
      owners: Object.values(owners).sort((a, b) => a.rank - b.rank).slice(0, 3) };
    await env.SUBSCRIBERS.put(key, JSON.stringify(res), { expirationTtl: 30 * 86400 });
    return res;
  }
  return { q, found: false };
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/api/") && req.method === "OPTIONS") return new Response(null, { headers: CORS });

    if (url.pathname === "/api/subscribe") {
      if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
      let body;
      try { body = await req.json(); } catch { return json({ error: "Bad request" }, 400); }
      if (body.website) return json({ ok: true }); // honeypot field: bots fill it, people never see it
      const email = String(body.email || "").trim().toLowerCase();
      if (email.length > 254 || !EMAIL.test(email)) return json({ error: "Please enter a valid email." }, 400);
      const key = "sub:" + email;
      const existing = await env.SUBSCRIBERS.get(key);
      if (!existing) {
        await env.SUBSCRIBERS.put(key, JSON.stringify({
          email, ts: new Date().toISOString(), page: String(body.page || "").slice(0, 200), country: req.cf?.country || "",
        }));
      }
      return json({ ok: true, already: !!existing });
    }

    if (url.pathname === "/api/prices") {
      const cached = await env.SUBSCRIBERS.get("cache:prices");
      if (cached) return new Response(cached, { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=3600", ...CORS } });
      return env.ASSETS.fetch(new Request(new URL("/prices.json", url)));
    }

    if (url.pathname === "/api/lookup") {
      const q = (url.searchParams.get("q") || "").trim().slice(0, 80);
      if (q.length < 2) return json({ error: "Query too short" }, 400);
      try { return json({ source: "Wikidata", ...(await lookup(env, q)) }, 200, { "Cache-Control": "public, max-age=86400" }); }
      catch (e) { return json({ q, found: false, error: "lookup unavailable" }); }
    }

    if (url.pathname.startsWith("/api/")) return json({ error: "Not found" }, 404);
    return env.ASSETS.fetch(req);
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil(refreshPrices(env));
  },
};
