class ShompysImage extends HTMLElement {

    // constructor() {
    //     // se ejecuta cuando el componente es creado
    //     super();
    //     this.attachShadow({ mode: "open" });
    //     this.src = this.getAttribute("src") ?? '';
    //     this.render();
    // };
    connectedCallback() {
        // se ejecuta cuando el componente es insertado en el dom
        this.attachShadow({ mode: "open" });
        this.src = this.getAttribute("src") ?? '';
        this.render();
    }

    disconnectedCallback(){
        // se ejecuta cuando el componente es desmontado del dom
        // Para probarlo ejecutar esta linea en index.js -> setTimeout(() => document.querySelector('shompys-image').remove(), 3000);

        console.log('destruyendo componente');
    }

    attributeChangedCallback() {
        // observador de atributos del componente falta indagar!!!
    }

    render() {
        //host: el elemento shadow le damos estilos
        //:host(.solid): si existe esta clase en el componente

        this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    outline: 5px dashed red;
                }
                :host(.solid) {
                    outline: 5px solid red;
                }
                .content {
                    background-color: var(--opa,#fff);
                    text-align: center;
                }
            </style>
            <div class="content">
                <img src=${this.src} alt="shompys" >
            </div>
        `;
    }
};

customElements.define('shompys-image', ShompysImage);