class LocalTimePresentation extends HTMLDivElement {
  constructor() {
    const self = super();
    this.timeElem = self.querySelector("time[datetime]");
    this.timer = null;
  }

  get timestampDate() {
    const ts = this.timeElem.getAttribute("datetime");
    return new Date(ts);
  }

  connectedCallback() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.timeElem.innerText = this.timestampDate.toLocaleString(undefined, {
          hourCycle: "h24",
        });
      }, 1000 * 15);
    }
  }

  disconnectdCallback() {
    clearInterval(this.timer);
  }
}

window.customElements.define("local-time", LocalTimePresentation, {
  extends: "div",
});
