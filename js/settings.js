const elHamburgerAbout = document.querySelector(".headerabout__hamburger");

const elHeaderAbout = document.querySelector(".headerabout");

elHamburgerAbout.addEventListener("click", () => {
    elHeaderAbout.classList.toggle("headerabout--open")
})