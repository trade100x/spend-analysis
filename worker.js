// Cloudflare Worker: serves the static site and stores early-access signups in KV.
// List signups: npx wrangler kv key list --binding SUBSCRIBERS --remote

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json", ...CORS } });
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname === "/api/subscribe") {
      if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
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
          email,
          ts: new Date().toISOString(),
          page: String(body.page || "").slice(0, 200),
          country: req.cf?.country || "",
        }));
      }
      return json({ ok: true, already: !!existing });
    }
    if (url.pathname.startsWith("/api/")) return json({ error: "Not found" }, 404);
    return env.ASSETS.fetch(req);
  },
};
