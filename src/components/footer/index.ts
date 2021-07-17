export function footer() {
  class Footer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var footerEl = document.createElement("div");
      footerEl.innerText = "Footer";
      footerEl.className = "footer";
      var style = document.createElement("style");
      style.textContent = ` .footer {
        background-color: #FFA0EA;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 230px;
        font-size: 22px; 
        font-family: "Roboto";
      }
      `;
      shadow.appendChild(footerEl);
      shadow.appendChild(style);
    }
  }
  customElements.define("footer-el", Footer);
}
