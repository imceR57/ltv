class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="header-top">
                <div>
                    <img src="./assets//img//logo.svg" alt="Logo"/>
                </div>
                <div class="header-top-right-icons">
                    <img src="./assets//img//icn_search.svg" alt="Search Icon"/>
                    <img src="./assets//img//icn_person.svg" alt="User Icon"/>
                </div>
            </div>
      `;
    }
}

customElements.define("header-page", Header);
