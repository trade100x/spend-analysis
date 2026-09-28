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
