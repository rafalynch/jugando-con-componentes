export function textInput() {
  class TextInput extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var labelEl = document.createElement("label");
      labelEl.className = "label";
      labelEl.innerHTML = `
        Nombre <input type="text" class="input" />
      `;

      var style = document.createElement("style");
      style.innerText = ` .input{
        display: block;
        margin:  10px 0 25px 0;
      },
      .label{
        display: block;
        margin:  5px 0;
        font-family: "Roboto";
      }
      `;

      shadow.appendChild(labelEl);
      shadow.appendChild(style);
    }
  }
  customElements.define("textinput-el", TextInput);
}
