export function button() {
  class Button extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var buttonEl = document.createElement("button");
      buttonEl.className = "button";
      buttonEl.innerText = "Button";
      var style = document.createElement("style");
      style.innerText = ` .button{
        font-size: 18px; 
        font-family: "Roboto";
        font-weight: 1000;
        border-style: none;
        width: 240px;
        height: 55px;
        background-color: #9CBBE9;
        border-radius: 3px;
      }
      `;
      shadow.appendChild(buttonEl);
      shadow.appendChild(style);
    }
  }
  customElements.define("button-el", Button);
}
