var elHamburger = document.querySelector(".header__hamburger");

var elHeader = document.querySelector(".header");

elHamburger.addEventListener("click", () => {
    elHeader.classList.toggle("header--open")
})
