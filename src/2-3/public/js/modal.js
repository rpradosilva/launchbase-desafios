const cards = document.querySelectorAll(".card")
const closeModal = document.querySelector(".close-modal")
const modalOverlay = document.querySelector(".modal-overlay")

for (let card of cards) {
    card.addEventListener("click", () => {
        const urlRocketseat = "https://rocketseat.com.br/"
        const cardId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = urlRocketseat + cardId
    })
}

closeModal.addEventListener("click", () => {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})