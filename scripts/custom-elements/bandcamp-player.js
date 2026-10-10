const BaseElement =
	typeof HTMLElement !== "undefined" ? HTMLElement : class {};

class BandcampPlayer extends BaseElement {
	static get observedAttributes() {
		return ["src"];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback() {
		if (this.innerHTML !== "") {
			this.render();
		}
	}

	get src() {
		return this.getAttribute("src") ?? "";
	}

	render() {
		const src = this.src;
		if (!src) return;

		const match = src.match(/album=(\d+)/);
		const fallbackUrl = match ? `https://bandcamp.com/album/${match[1]}` : "";
		const fallbackText = match ? "Listen on Bandcamp" : "";

		this.innerHTML = `<iframe class="bandcamp-player" src="${src}" seamless>${fallbackUrl ? `<a href="${fallbackUrl}">${fallbackText}</a>` : ""}</iframe>`;
	}
}

if (typeof customElements !== "undefined") {
	customElements.define("bandcamp-player", BandcampPlayer);
}

export { BandcampPlayer };
