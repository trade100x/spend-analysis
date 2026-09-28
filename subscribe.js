// Sticky early-access signup bar, shared by both pages. Posts to the Cloudflare Worker (worker.js).
(() => {
  const WORKER = "https://spend-analysis.madmarketagents.workers.dev";
  // Same-origin when served by the Worker; otherwise (GitHub Pages, localhost) call the Worker directly
  const API = /github\.io$|^localhost$|^127\.|^$/.test(location.hostname) ? WORKER + "/api/subscribe" : "/api/subscribe";
  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
                  set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
  if (store.get("sa-sub") === "done" || store.get("sa-sub") === "dismissed") return;

  document.head.insertAdjacentHTML("beforeend", `<style>
  .subbar{position:fixed;left:50%;bottom:16px;transform:translate(-50%,140%);width:min(680px,calc(100% - 24px));z-index:30;
    background:#fff;color:#111113;border:1px solid #ebebea;border-radius:18px;box-shadow:0 12px 40px -10px rgba(0,0,0,.18);
    padding:14px 14px 14px 18px;display:flex;align-items:center;gap:14px;transition:transform .45s cubic-bezier(.2,.8,.2,1);font-family:Inter,system-ui,sans-serif}
  .subbar.on{transform:translate(-50%,0)}
  .subbar .sb-txt{flex:1;min-width:0}
  .subbar .sb-txt b{display:block;font-size:15px;font-weight:600;letter-spacing:-.01em}
  .subbar .sb-txt span{display:block;font-size:12.5px;color:#6f6f78;line-height:1.35;margin-top:1px}
  .subbar form{display:flex;gap:6px;flex:none}
  .subbar input[type=email]{width:210px;height:40px;border:1px solid #ebebea;border-radius:11px;padding:0 12px;font:inherit;font-size:14px;outline:none;background:#fff;color:#111113}
  .subbar input[type=email]:focus{border-color:#111113}
  .subbar .sb-hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}
  .subbar button[type=submit]{height:40px;border:0;border-radius:11px;background:#111113;color:#fff;font:inherit;font-size:14px;font-weight:500;padding:0 16px;cursor:pointer;white-space:nowrap}
  .subbar button[type=submit]:disabled{opacity:.6;cursor:default}
  .subbar .sb-x{position:absolute;top:-10px;right:-10px;width:26px;height:26px;border-radius:99px;border:1px solid #ebebea;background:#fff;color:#a3a3ab;font-size:15px;line-height:1;cursor:pointer}
  .subbar .sb-x:hover{color:#111113}
  .subbar .sb-msg{font-size:12px;color:#b91c1c;margin-top:4px;display:none}
  .subbar.done form{display:none}
  body.open .subbar{display:none}
  body.sb-pad{padding-bottom:110px}
  @media (max-width:640px){
    .subbar{flex-direction:column;align-items:stretch;gap:10px;padding:14px;bottom:10px}
    .subbar form{width:100%}
    .subbar input[type=email]{flex:1;width:auto;min-width:0}
    body.sb-pad{padding-bottom:170px}
  }
  </style>`);

  const bar = document.createElement("div");
  bar.className = "subbar";
  bar.setAttribute("role", "region");
  bar.setAttribute("aria-label", "Early access signup");
  bar.innerHTML = `
    <button class="sb-x" aria-label="Dismiss">×</button>
    <div class="sb-txt"><b>Spend on it. Own a piece of it.</b>
      <span id="sb-sub">Get early access to our tool that turns your everyday spending into an investing plan.</span>
      <div class="sb-msg" id="sb-msg"></div></div>
    <form novalidate>
      <input type="email" name="email" placeholder="you@email.com" autocomplete="email" required aria-label="Email address">
      <input class="sb-hp" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
      <button type="submit">Get early access</button>
    </form>`;
  document.body.appendChild(bar);
  document.body.classList.add("sb-pad");
  setTimeout(() => bar.classList.add("on"), 2500);

  const msg = t => { const m = bar.querySelector("#sb-msg"); m.textContent = t; m.style.display = t ? "block" : "none"; };
  bar.querySelector(".sb-x").onclick = () => {
    bar.classList.remove("on"); document.body.classList.remove("sb-pad");
    if (!bar.classList.contains("done")) store.set("sa-sub", "dismissed");
    setTimeout(() => bar.remove(), 500);
  };
  bar.querySelector("form").onsubmit = async e => {
    e.preventDefault();
    const f = e.target, email = f.email.value.trim(), btn = f.querySelector("button");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return msg("Please enter a valid email.");
    msg(""); btn.disabled = true; btn.textContent = "Joining…";
    try {
      const r = await fetch(API, { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: f.website.value, page: location.pathname }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok || !d.ok) throw new Error(d.error || "Something went wrong. Please try again.");
      store.set("sa-sub", "done");
      bar.classList.add("done");
      bar.querySelector(".sb-txt b").textContent = d.already ? "You're already on the list ✓" : "You're on the list ✓";
      bar.querySelector("#sb-sub").textContent = "We'll email you when early access opens. No spam.";
    } catch (err) {
      msg(err.message || "Something went wrong. Please try again.");
      btn.disabled = false; btn.textContent = "Get early access";
    }
  };
})();
