class Card extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
            <div class="card-number">
                <div class="card-circle-wrapper">
                    <div class="card-circle">
                        <h1>` +
            this.getAttribute("number") +
            `</h1>
                    </div>
                </div>
                <div class="card-description">
                    <h4>Lorem Ipsum</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
      `;
    }
}

customElements.define("card-number", Card);
