class Search extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
            <div class="header-middle">
                <h2>` +
            this.getAttribute("headText") +
            `</h2>
                <p>
                    ` +
            this.getAttribute("headDescription") +
            `
                </p>
            </div>
            <div class="header-search-type">
                <h5>TYPE OF SEARCH:</h5>
                <div class="header-search-type-buttons">
                    <button class="header-search-type-btn active-search-type" data-search-type="email">
                        EMAIL ADDRESS
                    </button>
                    <button class="header-search-type-btn" data-search-type="phone">
                        PHONE NUMBER
                    </button>
                </div>
            </div>
            <div class="header-search-input">
                <div class="header-search-input-wrapper" data-search-error="">
                    <input 
                    type="text" 
                    placeholder="Enter An Email Address" 
                    class="header-search-input-text"/>
                </div>
                <button class="header-search-btn-go">GO!</button>
            </div>
      `;
    }
}

customElements.define("search-person", Search);
