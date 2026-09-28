// Money-flow visualizer (animated tree) + "Buy this stock" sheet. Loaded after brands.js.

/* ---------- Where major companies spend their own money (next hop) ----------
   share = rough share of that company's revenue flowing to the supplier (estimates) */
const COFLOW = {
  NVDA:[["2330.TW",.30],["000660.KS",.14],["MU",.05],["2317.TW",.04]],
  AMD:[["2330.TW",.35],["005930.KS",.06],["000660.KS",.05]],
  AVGO:[["2330.TW",.30],["000660.KS",.04]],
  MRVL:[["2330.TW",.30]],
  QCOM:[["2330.TW",.25],["005930.KS",.08]],
  AAPL:[["2317.TW",.12],["2330.TW",.07],["005930.KS",.04],["034220.KS",.02],["6758.T",.02],["GLW",.01]],
  MSFT:[["NVDA",.18],["AMD",.03],["CEG",.02],["ORCL",.02]],
  ORCL:[["NVDA",.30],["AMD",.05]],
  CRWV:[["NVDA",.45],["DLR",.08],["EQIX",.05]],
  AMZN:[["NVDA",.04],["UPS",.02],["PLD",.02],["RIVN",.01]],
  GOOGL:[["AVGO",.07],["NVDA",.04],["2330.TW",.02]],
  META:[["NVDA",.15],["AMD",.03],["ANET",.02]],
  "2330.TW":[["ASML",.12],["AMAT",.08],["8035.T",.06],["LRCX",.05]],
  "000660.KS":[["ASML",.06],["AMAT",.05],["LRCX",.05],["8035.T",.04]],
  MU:[["ASML",.05],["AMAT",.05],["LRCX",.05]],
  "005930.KS":[["ASML",.05],["AMAT",.04],["LRCX",.03]],
  "2317.TW":[["2330.TW",.05],["NVDA",.10],["000660.KS",.03]],
  "6758.T":[["Artists, actors & crews (private)",.35,"labor"],["2330.TW",.02]],
  "UMG.AS":[["Artists & songwriters (private)",.50,"labor"]],
  WMG:[["Artists & songwriters (private)",.50,"labor"]],
  WBD:[["Actors, writers & crews (private)",.40,"labor"]],
  CMCSA:[["Actors, writers & crews (private)",.30,"labor"],["DIS",.01]],
  NFLX:[["6758.T",.08],["WBD",.05],["AMZN",.02]],
  SPOT:[["UMG.AS",.25],["6758.T",.15],["WMG",.10],["GOOGL",.03]],
  UBER:[["GOOGL",.02],["ORCL",.02]],
  BKNG:[["GOOGL",.20],["META",.02]],
  EXPE:[["GOOGL",.20]],
  ABNB:[["GOOGL",.05],["AMZN",.02]],
  PDD:[["META",.12],["GOOGL",.08]],
  TSLA:[["300750.SZ",.10],["NVDA",.02],["6762.T",.02]],
  "7203.T":[["6902.T",.12],["300750.SZ",.02]],
  "1211.HK":[["2330.TW",.01]],
  CEG:[["CCJ",.08]],
  NEE:[["FSLR",.05],["GEV",.05],["VWS.CO",.02]],
  VRT:[["IFX.DE",.03],["TXN",.02]],
  WMT:[["PG",.04],["PEP",.03],["NESN.SW",.02],["UPS",.01]],
  COST:[["PG",.03],["PEP",.02]],
  MCD:[["SYY",.04],["TSN",.03]],
  SBUX:[["ADM",.03],["HUH1V.HE",.02]],
  DASH:[["GOOGL",.03],["AMZN",.02]],
};

/* ---------- Build a visible tree for one purchase ---------- */
let FV_OPEN = new Set();   // ids of expanded company nodes (onward flows)
let FV_SHUT = new Set();   // ids of collapsed category nodes
function fvBuild(k,pid,amt){
  const v=view(k,pid), mm=M[k];
  let n=0;
  const mk=(o)=>({id:"n"+(n++),kids:[],...o});
  const onward=(tk,usd,path,depth)=>{
    if(depth>5||!COFLOW[tk]) return [];
    return COFLOW[tk].filter(([t])=>!path.includes(t)).map(([t,share,cat])=>{
      const u=usd*share;
      if(CO[t]) { const c=mk({kind:"co",tk:t,usd:u,cat:"",pathKey:path.concat(t).join(">")}); c.more=()=>onward(t,u,path.concat(t),depth+1); c.expandable=!!COFLOW[t]; return c; }
      return mk({kind:"leaf",label:t,usd:u,cat:cat||"labor"});
    }).filter(c=>c.usd>=0.005).sort((a,b)=>b.usd-a.usd);
  };
  const walk=(node,usd,cat,isRoot)=>{
    const kids=node.children||[], claimed=kids.reduce((s,c)=>s+c.pct,0), own=usd*(100-claimed)/100;
    const me=mk({kind:isRoot?"root":"cat",label:isRoot?`${v.name} · ${v.pname}`:node.name,usd,cat:node.cat||cat,desc:node.desc});
    const cos=node.cos||[];
    const cap=cos.length?captureOf(node,cat,isRoot):1;
    cos.forEach(tk=>{ const u=own*cap/cos.length; const c=mk({kind:"co",tk,usd:u,pathKey:me.label+">"+tk}); c.more=()=>onward(tk,u,[tk],1); c.expandable=!!COFLOW[tk]; me.kids.push(c); });
    if(cos.length && cap<1 && own>usd*0.005) me.kids.push(mk({kind:"leaf",label:"Private & smaller firms",usd:own*(1-cap),cat:node.cat||cat}));
    if(!cos.length && kids.length && own>usd*0.005) me.kids.push(mk({kind:"leaf",label:isRoot?`Kept by ${v.name}`:"Stays at this level",usd:own,cat:node.cat||cat}));
    kids.forEach(c=>me.kids.push(walk(c,usd*c.pct/100,c.cat,false)));
    me.kids.sort((a,b)=>b.usd-a.usd);
    return me;
  };
  return walk(v.root,amt,mm.cat,true);
}

/* ---------- Layout + render ---------- */
const FV = {COL:210, W:176, ROW:38, PAD:12};
function fvRender(el, k, pid, amt){
  const root=fvBuild(k,pid,amt);
  const rows=[], edges=[];
  let row=0, maxDepth=0;
  const place=(node,depth)=>{
    node.depth=depth; maxDepth=Math.max(maxDepth,depth);
    let kids=[];
    if(node.kind==="co"){ if(FV_OPEN.has(node.pathKey)) kids=node.more(); }
    else if(!FV_SHUT.has(node.label+depth)) kids=node.kids;
    node.shown=kids;
    if(!kids.length){ node.y=row++; }
    else { kids.forEach(c=>place(c,depth+1)); node.y=kids[0].y; }
    rows.push(node);
  };
  place(root,0);
  const W=FV.PAD*2+maxDepth*FV.COL+FV.W, H=FV.PAD*2+row*FV.ROW;
  const X=d=>FV.PAD+d*FV.COL, Y=y=>FV.PAD+y*FV.ROW+FV.ROW/2;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let svg=`<svg class="fv-svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" aria-hidden="true">`;
  rows.forEach(p=>p.shown.forEach(c=>{
    const x1=X(p.depth)+FV.W, y1=Y(p.y), x2=X(c.depth), y2=Y(c.y), dx=(x2-x1)/2;
    const d=`M${x1},${y1} C${x1+dx},${y1} ${x2-dx},${y2} ${x2},${y2}`;
    const share=c.usd/root.usd, w=Math.max(1.5,Math.min(16,18*Math.sqrt(share)));
    const col=(CAT[c.cat]||CAT[p.cat]||{c:"#a1a1aa"}).c;
    const speed=(1.6-Math.min(1,share*4)*0.9).toFixed(2);
    svg+=`<path d="${d}" class="fv-base" stroke-width="${w}"/>`;
    svg+=`<path d="${d}" class="fv-flow" stroke="${col}" stroke-width="${Math.max(1.5,w*0.45)}" style="animation-duration:${speed}s"/>`;
    if(!reduce && share>0.03){
      const n=share>0.2?3:share>0.08?2:1;
      for(let i=0;i<n;i++) svg+=`<g class="fv-coin"><circle r="${share>0.2?4.5:3.5}"/><text dy="3">$</text><animateMotion dur="${(2.4+share).toFixed(2)}s" begin="${(i*2.4/n).toFixed(2)}s" repeatCount="indefinite" path="${d}"/></g>`;
    }
  }));
  svg+=`</svg>`;
  const nodes=rows.map(nd=>{
    const pct=nd.usd/root.usd*100, pctTxt=pct<10?pct.toFixed(1):Math.round(pct);
    const col=(CAT[nd.cat]||{c:"#a1a1aa"}).c;
    const canOpen = nd.kind==="co" ? nd.expandable : nd.kids.length>0 && nd.kind!=="root";
    const open = nd.kind==="co" ? FV_OPEN.has(nd.pathKey) : !FV_SHUT.has(nd.label+nd.depth);
    const icon = nd.kind==="co" ? cLogo(nd.tk,"sm") : nd.kind==="root" ? mLogo(k,"sm") : `<span class="fv-dot" style="background:${col}"></span>`;
    const label = nd.kind==="co" ? CO[nd.tk].n : nd.label;
    const sub = nd.kind==="co" ? `${nd.tk} · ${fmt(nd.usd)}` : `${fmt(nd.usd)} · ${pctTxt}%`;
    return `<div class="fv-node fv-${nd.kind} ${canOpen?"fv-can":""}" style="left:${X(nd.depth)}px;top:${Y(nd.y)-15}px;width:${FV.W}px" data-key="${esc(nd.kind==="co"?nd.pathKey:nd.label+nd.depth)}" data-kind="${nd.kind}" title="${esc(nd.desc||(nd.kind==="co"?CO[nd.tk].w:label))}">
      ${icon}<span class="fv-txt"><b>${esc(label)}</b><small>${sub}</small></span>
      ${nd.kind==="co"?`<button class="fv-buy" data-tk="${esc(nd.tk)}">Buy</button>`:""}
      ${canOpen?`<span class="fv-tog">${open?"−":"+"}</span>`:""}</div>`;
  }).join("");
  el.innerHTML=`<div class="fv-canvas" style="width:${W}px;height:${H}px">${svg}${nodes}</div>`;
  el.querySelectorAll(".fv-node.fv-can").forEach(d=>d.onclick=e=>{
    if(e.target.closest(".fv-buy")) return;
    const key=d.dataset.key;
    if(d.dataset.kind==="co"){ FV_OPEN.has(key)?FV_OPEN.delete(key):FV_OPEN.add(key); }
    else { FV_SHUT.has(key)?FV_SHUT.delete(key):FV_SHUT.add(key); }
    fvRender(el,k,pid,amt);
  });
  el.querySelectorAll(".fv-buy").forEach(b=>b.onclick=e=>{ e.stopPropagation(); openBuy(b.dataset.tk); });
}

/* ---------- Buy sheet ---------- */
const GF_EX = {NASDAQ:"NASDAQ",NYSE:"NYSE",TWSE:"TPE",TPEx:"TPEX","Euronext AMS":"AMS","Euronext PAR":"EPA","Euronext DUB":"ISE",XETRA:"ETR",TSE:"TYO",KRX:"KRX",LSE:"LON",
  "Borsa Italiana":"BIT",SIX:"SWX",HKEX:"HKG",SZSE:"SHE",NSE:"NSE",BME:"BME","Nasdaq STO":"STO","Nasdaq HEL":"HEL","Nasdaq CPH":"CPH",DFM:"DFM",ADX:"ADX",Tadawul:"TADAWUL",SGX:"SGX",IDX:"IDX"};
// International companies that also trade on a US exchange (ADR or direct listing)
const US_LINE = {"2330.TW":"TSM","6758.T":"SONY","7203.T":"TM","SHEL.L":"SHEL","9988.HK":"BABA","9618.HK":"JD","BP.L":"BP","ULVR.L":"UL","ENI.MI":"E",
  "VOD.L":"VOD","NOKIA.HE":"NOK","ERIC-B.ST":"ERIC","RYA.IR":"RYAAY","ASML":"ASML","SPOT":"SPOT"};
const isUS = tk => ["NASDAQ","NYSE","US-listed ETF"].includes(CO[tk].x);
const ySym = tk => tk==="ENBD.DFM" ? "EMIRATESNBD.AE" : tk.endsWith(".DFM") ? tk.slice(0,-4)+".AE" : tk;
const gfUrl = tk => `https://finance.yahoo.com/quote/${encodeURIComponent(ySym(tk))}`;
function brokerLinks(tk){
  const us = isUS(tk) ? tk : US_LINE[tk];
  const out=[];
  if(us){
    out.push(["Robinhood",`https://robinhood.com/us/en/stocks/${us}/`,`US · ${us}`]);
    out.push(["Public",`https://public.com/stocks/${us.toLowerCase()}`,`US · ${us}`]);
    out.push(["eToro",`https://www.etoro.com/markets/${us.toLowerCase()}`,`Global · ${us}`]);
  }
  if(!isUS(tk)){
    if(CO[tk].x==="NSE"){ out.push(["Zerodha","https://zerodha.com/","India · NSE"]); out.push(["Groww","https://groww.in/stocks","India · NSE"]); }
    out.push(["Interactive Brokers","https://www.interactivebrokers.com/","150+ markets incl. "+CO[tk].x]);
    out.push(["Saxo","https://www.home.saxo/","Global markets"]);
  } else {
    out.push(["Interactive Brokers","https://www.interactivebrokers.com/","Global"]);
  }
  return {us, out};
}
function openBuy(tk){
  let el=document.getElementById("buy-sheet");
  if(!el){ el=document.createElement("div"); el.id="buy-sheet"; document.body.appendChild(el); }
  const c=CO[tk], {us,out}=brokerLinks(tk);
  el.innerHTML=`<div class="bs-scrim"></div><div class="bs-card" role="dialog" aria-label="Invest in ${esc(c.n)}">
    <button class="bs-x" aria-label="Close">×</button>
    <div class="bs-h">${cLogo(tk,"lg")}<div><b>${esc(c.n)}</b><small>${esc(tk)} · ${esc(c.x)} · ${REG[c.r]}</small></div></div>
    <p class="bs-w">${esc(c.w)}</p>
    ${us && !isUS(tk)?`<p class="bs-note">Also trades in the US as <b>${us}</b>, so you can buy it from most US brokers.</p>`:""}
    <div class="bs-list">${out.map(([n,u,s])=>`<a class="bs-b" href="${u}" target="_blank" rel="noopener sponsored"><span><b>Buy on ${esc(n)}</b><small>${esc(s)}</small></span><span>↗</span></a>`).join("")}
      <a class="bs-b bs-q" href="${gfUrl(tk)}" target="_blank" rel="noopener"><span><b>Live price & chart</b><small>Yahoo Finance</small></span><span>↗</span></a></div>
    <p class="bs-d">Links go to third-party brokers. We're not affiliated, and this isn't investment advice. Check fees and availability in your country.</p></div>`;
  el.classList.add("on");
  const close=()=>el.classList.remove("on");
  el.querySelector(".bs-scrim").onclick=close; el.querySelector(".bs-x").onclick=close;
}
addEventListener("keydown",e=>{ if(e.key==="Escape") document.getElementById("buy-sheet")?.classList.remove("on"); });

/* ---------- Styles for both pages ---------- */
document.head.insertAdjacentHTML("beforeend",`<style>
.logo .emo{font-size:20px;line-height:1}
.logo.sm .emo{font-size:13px}
.logo.lg .emo{font-size:24px}
.fv{position:relative;overflow:auto;border:1px solid var(--line);border-radius:14px;background:var(--bg);max-height:720px;-webkit-overflow-scrolling:touch}
.fv.wide{width:min(1180px,calc(100vw - 32px));margin-left:50%;transform:translateX(-50%)}
.fv-canvas{position:relative}
.fv-svg{position:absolute;inset:0}
.fv-base{fill:none;stroke:var(--line);stroke-linecap:round;opacity:.9}
.fv-flow{fill:none;stroke-linecap:round;stroke-dasharray:3 11;animation:fvdash 1.2s linear infinite;opacity:.85}
@keyframes fvdash{to{stroke-dashoffset:-14}}
.fv-coin circle{fill:#16a34a;stroke:#fff;stroke-width:1.5}
.fv-coin text{fill:#fff;font:700 6px Inter,sans-serif;text-anchor:middle}
.fv-node{position:absolute;height:30px;display:flex;align-items:center;gap:7px;padding:0 6px 0 4px;background:var(--bg);border:1px solid var(--line);border-radius:9px;font-size:12px;box-shadow:0 1px 2px rgba(0,0,0,.04)}
.fv-node.fv-can{cursor:pointer}
.fv-node.fv-can:hover{border-color:var(--muted)}
.fv-root{border-color:var(--text);font-weight:600}
.fv-leaf{background:var(--soft);border-style:dashed}
.fv-dot{width:9px;height:9px;border-radius:99px;flex:none;margin-left:5px}
.fv-txt{flex:1;min-width:0;display:flex;flex-direction:column;line-height:1.15}
.fv-txt b{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fv-txt small{color:var(--muted);font-size:10.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fv-tog{color:var(--faint);font-size:13px;width:12px;text-align:center;flex:none}
.fv-buy{border:0;background:var(--text);color:var(--bg);font-size:10px;font-weight:600;border-radius:6px;padding:2px 6px;cursor:pointer;flex:none}
.fv-hint{font-size:12px;color:var(--faint);margin:8px 0 0}
@media (prefers-reduced-motion: reduce){ .fv-flow{animation:none} }
#buy-sheet{display:none}
#buy-sheet.on{display:block}
.bs-scrim{position:fixed;inset:0;background:rgba(17,17,19,.35);z-index:40}
.bs-card{position:fixed;z-index:41;left:50%;top:50%;transform:translate(-50%,-50%);width:min(420px,calc(100% - 32px));max-height:calc(100% - 32px);overflow:auto;background:#fff;color:#111113;border-radius:18px;padding:22px;box-shadow:0 20px 60px rgba(0,0,0,.18)}
.bs-x{position:absolute;right:14px;top:12px;border:0;background:#f4f4f5;width:30px;height:30px;border-radius:99px;font-size:18px;cursor:pointer;color:#71717a}
.bs-h{display:flex;gap:12px;align-items:center}
.bs-h b{display:block;font-size:17px}
.bs-h small{color:#71717a;font-size:12px}
.bs-w{color:#52525b;font-size:14px;margin:14px 0 8px}
.bs-note{font-size:13px;background:#f6f6f5;border-radius:10px;padding:8px 10px;margin:0 0 8px}
.bs-list{display:flex;flex-direction:column;gap:6px;margin:12px 0}
.bs-b{display:flex;justify-content:space-between;align-items:center;border:1px solid #ebebea;border-radius:12px;padding:10px 12px;text-decoration:none;color:inherit}
.bs-b:hover{border-color:#111113}
.bs-b b{display:block;font-weight:500;font-size:14px}
.bs-b small{color:#71717a;font-size:12px}
.bs-q{background:#f6f6f5}
.bs-d{font-size:11px;color:#a1a1aa;margin:6px 0 0}
</style>`);
