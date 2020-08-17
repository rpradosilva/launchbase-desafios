const changeThemeBtn = document.querySelector(".changeTheme")
const bodyDocument = document.getElementsByTagName("BODY")[0]
const logoCourses = document.querySelectorAll(".classes .cards .card .card__image img")


function storageTheme(id, value) {
    localStorage.setItem(id, JSON.stringify(value))
}

function changeTheme() {
    const currentTheme = bodyDocument.getAttribute("class")
    if (currentTheme == null || currentTheme == "dark" || currentTheme == "") {
        bodyDocument.classList.add("light")
        storageTheme("theme", "light")
    } else {
        bodyDocument.classList.remove("light")
        storageTheme("theme", "dark")
    }
}

function loadTheme() {
    const defaultTheme = JSON.parse(localStorage.getItem("theme"))
    if (defaultTheme == null || defaultTheme == "dark" || defaultTheme == "") {
        bodyDocument.classList.remove("light")
    } else {
        bodyDocument.classList.add("light")
    }
}

changeThemeBtn.addEventListener("click", changeTheme)

loadTheme()