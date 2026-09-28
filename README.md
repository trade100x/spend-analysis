# Spend Analysis

Demo: card-spend analysis that traces every transaction through the merchant's supply chain, so you can see which industries, listed companies (global) and crypto tokens your money actually funds. It also predicts future spending based on a persona.

- Click a transaction to see its hierarchy. For example, ChatGPT Plus → cloud (Microsoft, Oracle, CoreWeave) → GPUs (NVIDIA, AMD, Broadcom) → foundry (TSMC) → equipment (ASML, Tokyo Electron), plus power, cooling, optics and cables.
- A market filter narrows stock ideas to Americas, Europe, Asia-Pacific or the Middle East.
- The persona switch (developer, designer, founder, creator, student) changes the future-spend predictions and the 6-month projection.

Pages:
- `index.html` is the public calculator. Pick brands, set a monthly amount, and get the overview. Selections are encoded in the URL hash, so results can be shared.
- `dashboard.html` is the card demo, with dummy transactions and persona-based future spending.
- `shared.js` holds the data (companies, supply-chain trees, tokens) and the helpers both pages use.

Static files, no build step. Brand logos come from Google's favicon service, with DuckDuckGo as a fallback. Transactions are dummy data. Company figures are approximate public numbers (Sep 2026). Supply-chain splits are modelled estimates. Not investment advice.
