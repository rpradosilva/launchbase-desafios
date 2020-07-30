const toggleNav = document.querySelector(".toggle")
const bodyDocument = document.getElementsByTagName("BODY")[0]
const changeThemeBtn = document.querySelector(".changeTheme")
const menuItems = document.querySelector("header nav ul")
const cards = document.querySelectorAll(".card")
const closeModal = document.querySelector(".close-modal")
const modalOverlay = document.querySelector(".modal-overlay")
const defaultTheme = localStorage.getItem("theme")
const urlRocketseat = "https://rocketseat.com.br/"


toggleNav.addEventListener("click", () => {
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "block"
    } else {
        menuItems.style.display = ""
    }
})

for (let card of cards) {
    card.addEventListener("click", () => {
        const cardId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = urlRocketseat + cardId
    })
}

closeModal.addEventListener("click", () => {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})


changeThemeBtn.addEventListener("click", changeTheme)

function changeTheme() {
    bodyDocument.classList.toggle("light")
        //storageTheme("theme", "dark")
}

function storageTheme(id, value) {
    localStorage.setItem(id, JSON.stringify(value))
}

function loadTheme() {
    console.log(defaultTheme)
}

loadTheme()