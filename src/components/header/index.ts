export function header() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var headerEl = document.createElement("div");
      headerEl.setAttribute("class", "header");
      headerEl.innerText = "Header";
      var style = document.createElement("style");
      style.textContent = `.header {
        background-color: #FF8282;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        font-size: 22px; 
        font-family: "Roboto";
      }
      `;
      shadow.appendChild(headerEl);
      shadow.appendChild(style);
    }
  }
  customElements.define("header-el", Header);
}
