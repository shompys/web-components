class MyButton extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.render();
        this.id = this.dataset.id;
        this.shadowRoot
            .querySelector("button")
            .addEventListener("click", () => {
                console.log(this.onClick);
                if (this.onClick) {
                    this.onClick();
                }
                this.emitInfo();
            });
    }

    emitInfo() {
        const event = new CustomEvent("INFO-BUTTON", {
            detail: this.id,
            composed: true,
            bubbles: true,
        });
        this.dispatchEvent(event);
    }
    //:host-context(body.red): si body tiene la clase red. (solo funciona en chrome)
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host(.dark) {
                    background-color: #fff;
                }
                :host-context(body.red){
                    background-color: #f00;
                }
                button {
                    color: #fff;
                    font-weight: bold;
                    font-size: 1em;
                    border: none;
                    padding: .8rem 1rem;
                    background-color: var(--color-test, #0af);
                    border-radius: 4px;
                }
                button:hover {
                    cursor: pointer;
                    background-color: #0cf;
                    transition: all .2s linear;
                }
            </style>
            <button >
                <slot/>
            </button>
        `;
    }
}
customElements.define("my-button", MyButton);
