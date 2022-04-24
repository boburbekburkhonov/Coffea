const elHamburgerSubscribe = document.querySelector(".headersubscribe__hamburger");

const elHeaderSubscribe = document.querySelector(".headersubscribe");

elHamburgerSubscribe.addEventListener("click", () => {
    elHeaderSubscribe.classList.toggle("headersubscribe--open")
})