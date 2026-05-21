let formOverlay = document.querySelector(".overlay")
let modal = document.querySelector(".modal")
let Form = document.querySelector(".form")
let Openbtn = document.querySelector(".button")
let CloseBtn = document.querySelector(".close-modal-btn")
Openbtn.addEventListener("click", () => {
    formOverlay.classList.remove("hidden")
    modal.classList.remove("hidden")
})
CloseBtn.addEventListener("click", Close)
formOverlay.addEventListener("click", Close)
function Close() {
    formOverlay.classList.add("hidden")
    modal.classList.add("hidden")
}