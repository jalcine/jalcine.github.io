function buildBskyUrl(uri) {
	const match = uri.match(/^at:\/\/([^/]+)\/app\.bsky\.feed\.post\/([^/]+)$/);
	if (!match) return "";
	return `https://bsky.app/profile/${match[1]}/post/${match[2]}`;
}

function loadEmbedScript() {
	if (document.querySelector('script[src="https://embed.bsky.app/static/embed.js"]')) {
		return;
	}
	const script = document.createElement("script");
	script.async = true;
	script.src = "https://embed.bsky.app/static/embed.js";
	document.head.appendChild(script);
}

const BaseElement =
	typeof HTMLElement !== "undefined" ? HTMLElement : class {};

class BlueskyPost extends BaseElement {
	static get observedAttributes() {
		return ["uri", "cid", "color-mode"];
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

	get uri() {
		return this.getAttribute("uri") ?? "";
	}

	get cid() {
		return this.getAttribute("cid");
	}

	get colorMode() {
		return this.getAttribute("color-mode") ?? "system";
	}

	render() {
		const uri = this.uri;
		if (!uri) return;

		const bskyUrl = buildBskyUrl(uri);
		const cidAttr = this.cid ? `data-bluesky-cid="${this.cid}"` : "";

		this.innerHTML = `
			<blockquote class="bluesky-embed"
				data-bluesky-uri="${uri}"
				${cidAttr}
				data-bluesky-embed-color-mode="${this.colorMode}">
				<p><a href="${bskyUrl}?ref_src=embed">View on Bluesky</a></p>
			</blockquote>
		`;
	}
}

if (typeof customElements !== "undefined") {
	customElements.define("bluesky-post", BlueskyPost);
}

export { BlueskyPost };
