const toggleButton = document.querySelector(".toggle-button")
const links = document.querySelector(".links")

toggleButton.addEventListener("click", function () {
    links.classList.toggle("show")
})