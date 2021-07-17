export function title() {
  class Title extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var titleEl = document.createElement("h1");
      titleEl.setAttribute("class", "title");
      titleEl.innerText = "Soy un titulo ";
      var style = document.createElement("style");
      style.textContent = `.title {
        display: flex;
        align-items: center;
        height: 50px;
        font-size: 52px; 
        font-family: "Roboto";
        margin: 0 0 25px;
      }
      `;
      shadow.appendChild(titleEl);
      shadow.appendChild(style);
    }
  }
  customElements.define("title-el", Title);
}
