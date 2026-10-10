const BaseElement =
	typeof HTMLElement !== "undefined" ? HTMLElement : class {};

class BookwyrmEmbed extends BaseElement {
	static get observedAttributes() {
		return ["url", "title", "height"];
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

	get title() {
		return this.getAttribute("title") ?? "";
	}

	get height() {
		return this.getAttribute("height") ?? "400";
	}

	render() {
		const rawUrl = this.url;
		if (!rawUrl) return;

		const fixedUrl = rawUrl.replace(/^http:\/\//, "https://");
		const height = this.height;
		const title = this.title;
		const titleAttr = title ? `title="${title}"` : "";

		this.innerHTML = `<iframe style="border-width:0;" width="100%" height="${height}" ${titleAttr} src="${fixedUrl}"></iframe>`;
	}
}

if (typeof customElements !== "undefined") {
	customElements.define("bookwyrm-embed", BookwyrmEmbed);
}

export { BookwyrmEmbed };
