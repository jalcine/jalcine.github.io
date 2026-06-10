function loadEmbedScript(serverOrigin) {
	if (document.querySelector(`script[src="${serverOrigin}/embed.js"]`)) {
		return;
	}
	const script = document.createElement("script");
	script.async = true;
	script.src = `${serverOrigin}/embed.js`;
	document.head.appendChild(script);
}

function extractServerOrigin(url) {
	try {
		return new URL(url).origin;
	} catch {
		return "";
	}
}

const BaseElement =
	typeof HTMLElement !== "undefined" ? HTMLElement : class {};

class MastodonPost extends BaseElement {
	static get observedAttributes() {
		return ["url"];
	}

	connectedCallback() {
		this.render();
		const origin = extractServerOrigin(this.url);
		if (origin) {
			loadEmbedScript(origin);
		}
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

		this.innerHTML = `<iframe src="${url}/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe>`;
	}
}

if (typeof customElements !== "undefined") {
	customElements.define("mastodon-post", MastodonPost);
}

export { MastodonPost };
