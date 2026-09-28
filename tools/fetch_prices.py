#!/usr/bin/env python3
"""Build prices.json: ~3 years of monthly closes (Yahoo Finance) for every company/ETF in the site data.
Usage: python3 tools/fetch_prices.py   (run from the repo root; needs node for reading the JS data)"""
import json, subprocess, time, urllib.parse, urllib.request, datetime

tickers = json.loads(subprocess.check_output(["node", "-e", """
global.document={head:{insertAdjacentHTML(){}}};global.addEventListener=()=>{};global.matchMedia=()=>({matches:false});
const fs=require('fs');eval(['shared.js','catalog.js','brands.js'].map(f=>fs.readFileSync(f,'utf8')).join('\\n')+';console.log(JSON.stringify(Object.keys(CO)))')"""]))

SPECIAL = {"ENBD.DFM": "EMIRATESNBD.AE"}
def yahoo(t):
    if t in SPECIAL: return SPECIAL[t]
    if t.endswith(".DFM"): return t[:-4] + ".AE"
    return t

out, missing = {}, []
pairs = [(t, yahoo(t)) for t in tickers if not t.startswith("PRE:")]
for i in range(0, len(pairs), 20):
    batch = pairs[i:i+20]
    url = "https://query1.finance.yahoo.com/v8/finance/spark?symbols=" + ",".join(urllib.parse.quote(y) for _, y in batch) + "&range=3y&interval=1mo"
    data = json.load(urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=30))
    for t, y in batch:
        v = data.get(y) or {}
        pts = [[ts, float(f"{c:.5g}")] for ts, c in zip(v.get("timestamp") or [], v.get("close") or []) if c]
        if len(pts) >= 2: out[t] = pts
        else: missing.append(t)
    time.sleep(0.4)

json.dump({"asof": datetime.date.today().isoformat(), "source": "Yahoo Finance monthly closes", "s": out},
          open("prices.json", "w"), separators=(",", ":"))
print(f"{len(out)} symbols written; missing: {missing}")
