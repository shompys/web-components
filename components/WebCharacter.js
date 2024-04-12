class WebCharacter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.type = this.getAttribute("type");
    }
    static get styles() {
        return `
            :host(.bg) {
                background-color: #333;
            }
            .character {
                width: 150px;
                height: 200px;
            }
            .body {
                height: 150px;
                position: relative;
                z-index:2;
                cursor: pointer;
            }
            .dance {
                animation: dance 2s infinite alternate;
            }
            .leg {
                height: 75px;
            }
            .legs {
                transform: translate(45px, -28px);
            }
            .left {
                transform: rotateY(180deg);
            }

            @keyframes dance {
                0% { transform: translate(0) rotate(0deg); }
                25% { transform: rotate(-25deg)}
                75% { transform: rotate(25deg)}
                100% { transform: translateY(15px) rotate(0deg); }
            }
        `;
    }
    connectedCallback() {
        this.render();
        this.body = this.shadowRoot.querySelector(".body");
        this.body.addEventListener("click", () => this.setDance());
    }

    setDance() {
        // this.body.classList.add("dance");
        this.body.classList.toggle("dance");
    }

    render() {
        const image =
            this.type === "shompys"
                ? "https://d2q2so0mkhigrt.cloudfront.net/shompys-icon.webp"
                : "../assets/html.svg";
        this.shadowRoot.innerHTML = `
        <style>${WebCharacter.styles}</style>
            <div class="character">
                <img class="body" src=${image} alt="html" />
                <div class="legs">
                    <img class="left leg" src="../assets/leg.svg" alt="leg" />
                    <img class="right leg" src="../assets/leg.svg" alt="leg" />
                </div>
            </div>
        `;
    }
}
customElements.define("web-character", WebCharacter);
