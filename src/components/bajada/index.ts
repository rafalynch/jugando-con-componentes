export function bajada() {
  class Bajada extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var bajadaEl = document.createElement("span");
      bajadaEl.className = "bajada";
      bajadaEl.innerText = "Esta es la mejor bajada";
      var style = document.createElement("style");
      style.innerText = ` .bajada{
        font-size: 12px; 
        font-family: "Roboto";
      }
      `;
      shadow.appendChild(bajadaEl);
      shadow.appendChild(style);
    }
  }
  customElements.define("bajada-el", Bajada);
}
