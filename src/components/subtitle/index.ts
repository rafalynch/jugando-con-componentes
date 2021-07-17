export function subtitle() {
  class Subtitle extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var subtitleEl = document.createElement("h3");
      subtitleEl.setAttribute("class", "subtitle");
      subtitleEl.innerText = "Subtitulo";
      var style = document.createElement("style");
      style.textContent = `.subtitle {
        display: flex;
        align-items: center;
        height: 50px;
        font-size: 20px; 
        font-family: "Roboto";
      }
      `;
      shadow.appendChild(subtitleEl);
      shadow.appendChild(style);
    }
  }
  customElements.define("subtitle-el", Subtitle);
}
