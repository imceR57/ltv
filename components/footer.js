class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="footer-info">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div class="footer-links">
            <a>Terms</a>
            <a>Privacy</a>
        </div>
    </footer>
      `;
    }
}

customElements.define("footer-page", Footer);
