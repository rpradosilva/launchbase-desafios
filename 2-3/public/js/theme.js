const changeThemeBtn = document.querySelector(".changeTheme")
const bodyDocument = document.getElementsByTagName("BODY")[0]

changeThemeBtn.addEventListener("click", changeTheme)

function changeTheme() {
    const currentTheme = bodyDocument.getAttribute("class")
    if (currentTheme === null || currentTheme === "dark" || currentTheme === "") {
        bodyDocument.classList.add("light")
        storageTheme("theme", "light")
    } else {
        bodyDocument.classList.remove("light")
        storageTheme("theme", "dark")
    }
}

function storageTheme(id, value) {
    localStorage.setItem(id, JSON.stringify(value))
}

function loadTheme() {
    const defaultTheme = localStorage.getItem("theme")
    console.log(defaultTheme)
}