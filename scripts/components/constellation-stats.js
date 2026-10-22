/**
 * constellation-stats — shows how many times a URL has been linked across
 * ATProto (via constellation.microcosm.blue) and how many of those linking
 * posts have been liked.
 *
 * Usage: <constellation-stats url="https://example.com"></constellation-stats>
 */

const styles = `
  .constellation-stats {
    display: inline-flex;
    gap: 1rem;
    align-items: center;
    padding: 0.4rem 0.7rem;
    border: 1px solid var(--border, #ddd);
    border-radius: 0.5rem;
    font-size: 0.85rem;
    color: var(--fg, inherit);
    background: var(--surface, #fafafa);
  }
  .constellation-stats .stat { display: inline-flex; flex-direction: column; line-height: 1.1; }
  .constellation-stats .stat .n { font-size: 1.1rem; font-weight: 600; }
  .constellation-stats .stat .l { color: var(--muted, #888); text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.65rem; }
  .constellation-stats .sep { color: var(--muted, #888); }
  .constellation-stats .err { color: var(--error, #b00); }
`;

function escapeHtml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function formatNum(n) {
  n = Number(n) || 0;
  return n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1) + "k" : String(n);
}

const BaseElement = typeof HTMLElement !== "undefined" ? HTMLElement : class {};

class ConstellationStats extends BaseElement {
  static get observedAttributes() { return ["url"]; }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
    this._style.textContent = styles;
    this.shadowRoot.appendChild(this._style);
    this._render();
    this._load();
  }

  get url() { return this.getAttribute("url") || ""; }

  _render(state = "loading") {
    const wrap = document.createElement("div");
    wrap.className = "constellation-stats";
    if (state === "loading") {
      wrap.innerHTML = `<span class="stat"><span class="n">—</span><span class="l">linked</span></span><span class="sep">·</span><span class="stat"><span class="n">—</span><span class="l">liked</span></span>`;
    } else if (state === "error") {
      wrap.innerHTML = `<span class="err">constellation unavailable</span>`;
    } else {
      wrap.innerHTML =
        `<span class="stat"><span class="n">${formatNum(state.backlinks)}</span><span class="l">linked</span></span>` +
        `<span class="sep">·</span>` +
        `<span class="stat"><span class="n">${formatNum(state.likes)}</span><span class="l">liked</span></span>`;
    }
    this.shadowRoot.replaceChild(wrap, this.shadowRoot.firstChild);
  }

  async _load() {
    const url = this.url;
    if (!url) { this._render("error"); return; }
    try {
      const res = await fetch(`/api/refs?url=${encodeURIComponent(url)}`, {
        headers: { Accept: "application/json" }
      });
      if (!res.ok) { this._render("error"); return; }
      const data = await res.json();
      this._render(data.error ? "error" : data);
    } catch {
      this._render("error");
    }
  }
}

if (typeof customElements !== "undefined") {
  customElements.define("constellation-stats", ConstellationStats);
}

export { ConstellationStats };