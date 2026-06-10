function loadEmbedScript() {
	if (document.querySelector('script[src="https://substack.com/embedjs/embed.js"]')) {
		return;
	}
	const script = document.createElement("script");
	script.async = true;
	script.src = "https://substack.com/embedjs/embed.js";
	document.head.appendChild(script);
}

const BaseElement =
	typeof HTMLElement !== "undefined" ? HTMLElement : class {};

class SubstackEmbed extends BaseElement {
	static get observedAttributes() {
		return ["url"];
	}

	connectedCallback() {
		this.render();
		loadEmbedScript();
	}

	attributeChangedCallback() {
		if (this.innerHTML !== "") {
			this.render();
		}
	}

	get url() {
		return this.getAttribute("url") ?? "";
	}

	render() {
		const url = this.url;
		if (!url) return;

		this.innerHTML = `
			<div class="substack-post-embed">
				<a data-comment-link href="${url}">Read on Substack</a>
			</div>
		`;
	}
}

if (typeof customElements !== "undefined") {
	customElements.define("substack-embed", SubstackEmbed);
}

export { SubstackEmbed };
