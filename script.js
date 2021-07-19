let searchType = "email";
const headerSearchError = {
    email: "Please enter a valid email address",
    phone: "Please enter a valid phone number",
};

function getSearchType(e) {
    return e.getAttribute("data-search-type");
}

function validatePhone(phoneNumber) {
    /* Valid phone number format 
        (123) 456-7890
        +(123) 456-7890
        +(123)-456-7890
        +(123) - 456-7890
        +(123) - 456-78-90
        123-456-7890
        123.456.7890
        1234567890
        +31636363634
        075-63546725
    */
    const phoneFormat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    return phoneFormat.test(phoneNumber);
}

function validateEmail(email) {
    const emailFormat =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailFormat.test(String(email).toLowerCase());
}

document.querySelectorAll(".header-search-type-btn").forEach((item) => {
    item.addEventListener("click", function (_) {
        const currentActive = document.querySelector(".active-search-type");
        currentActive.classList.remove("active-search-type");
        searchType = getSearchType(this);
        const headerSearch = document.querySelector(
            ".header-search-input-text"
        );
        const searchPlaceholder =
            searchType === "phone"
                ? "Enter A Phone Number"
                : "Enter An Email Address";
        headerSearch.placeholder = searchPlaceholder;
        this.classList.toggle("active-search-type");
    });
});

const go = document.querySelector(".header-search-btn-go");

go.addEventListener("click", function () {
    const searchInput = document.querySelector(".header-search-input-text");
    const searchInputWrapper = document.querySelector(
        ".header-search-input-wrapper"
    );
    const searchValue = searchInput.value;
    const errorCheck =
        searchType === "email"
            ? validateEmail(searchValue)
            : validatePhone(searchValue);
    if (!errorCheck) {
        searchInput.classList.add("error");
        searchInputWrapper.setAttribute(
            "data-search-error",
            headerSearchError[searchType]
        );
        searchInputWrapper.classList.add("error");
    } else {
        searchInput.classList.remove("error");
        searchInputWrapper.classList.remove("error");
    }
});
