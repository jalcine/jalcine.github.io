const BaseElement =
	typeof HTMLElement !== "undefined" ? HTMLElement : class {};

class OdesliEmbed extends BaseElement {
	static get observedAttributes() {
		return ["url", "theme"];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback() {
		if (this.innerHTML !== "") {
			this.render();
		}
	}

	get url() {
		return this.getAttribute("url") ?? "";
	}

	get theme() {
		return this.getAttribute("theme") ?? "light";
	}

	render() {
		const url = this.url;
		if (!url) return;

		const theme = this.theme;
		const encodedUrl = encodeURIComponent(url);

		this.innerHTML = `
			<div style="max-width:100%;" class="embed">
				<div style="position:relative;padding-bottom:calc(56.25% + 52px);height: 0;">
				<iframe style="position:absolute;top:0;left:0;"
						width="100%" height="100%" src="https://odesli.co/embed/?url=${encodedUrl}&theme=${theme}"
						frameborder="0" allowfullscreen
						sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
						allow="clipboard-read; clipboard-write"></iframe>
				</div>
			</div>
		`;
	}
}

if (typeof customElements !== "undefined") {
	customElements.define("odesli-embed", OdesliEmbed);
}

export { OdesliEmbed };
