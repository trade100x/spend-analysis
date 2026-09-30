# Spend Analysis

See where your money really goes. Pick what you spend on (brands, specific products, groceries, even a trip abroad) and trace it through supply chains to the listed companies, stocks and tokens it funds.

**Live:** https://trade100x.github.io/spend-analysis/

## Pages
- `index.html` is the public calculator:
  - 137 brands and categories, each with product lines (iPhone vs AirPods vs iCloud+, Uber Rides vs Uber Eats, …), plus everyday spending (groceries, electricity, pets) and trips (Japan, Italy, Dubai).
  - Any other brand can be added by picking its category. These use a generic template and are labelled as estimates.
  - Two views: **Summary** (companies funded, invest-alongside basket, purchase-by-purchase breakdown, tokens) and **Money flow** (an animated graph you can expand company by company, e.g. Netflix → Sony → where Sony spends).
  - **Buy** buttons link to brokers (Robinhood / Public / eToro for US listings and ADRs, Interactive Brokers / Saxo for other markets, Zerodha / Groww for NSE).
  - Selections are saved in the URL, so results can be shared.
- `dashboard.html` is the card demo, with dummy transactions and persona-based future spending.

## Data files
- `shared.js` holds the base companies, categories, the original 10 merchant supply chains and the helpers.
- `catalog.js` holds product lines (Apple devices and services, etc.), more companies, and the everyday and travel categories.
- `brands.js` holds the top global brands with their listed owners, plus category templates for any brand.
- `viz.js` holds the money-flow visualizer, the company-to-supplier "next hop" flows and the buy sheet.

## Accuracy
Hard figures (revenue, users, ownership stakes) were fact-checked against company filings and reputable reporting in Sep 2026. Supply-chain percentage splits, "next hop" company flows and listed-capture shares are **modelled estimates**, not audited company data. Not investment advice.

Static files, no build step. Logos come from Google's favicon service, with DuckDuckGo as a fallback.

## Early-access signups
The signup card (`subscribe.js`) posts to the Worker (`/api/subscribe`), which stores one row per email in the **D1 database `spend-analysis`, table `subscribers`** (email, created_at, page, country). Invalid emails are rejected, bots dropped via a honeypot field, duplicates ignored.

- Dashboard: Cloudflare → Storage & Databases → D1 → spend-analysis → Tables → subscribers
- CLI: `npx wrangler d1 execute spend-analysis --remote --command "SELECT * FROM subscribers ORDER BY created_at DESC"`

The KV namespace `SUBSCRIBERS` now only holds caches (prices, ownership lookups).

## Live data sources
- **Prices:** monthly closes from Yahoo Finance, built by `tools/fetch_prices.py` into `prices.json` and refreshed daily by the Worker's cron (`/api/prices`, cached in KV). They power the "If you'd invested it instead" returns.
- **Trending:** Apple's public App Store top-grossing RSS, fetched by the browser for the visitor's country.
- **Ownership:** Wikidata (`/api/lookup?q=`), which follows owned-by/parent relations up to a listed company. It's used when someone adds a brand we haven't curated.
- **Local companies:** everyday categories (electricity, groceries) switch to the visitor's country, e.g. DEWA/Empower in the UAE, NTPC/Tata Power in India, National Grid in the UK.
