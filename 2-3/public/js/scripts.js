const toggleNav = document.querySelector(".toggle")
const bodyDocument = document.getElementsByTagName("BODY")[0]
const changeTheme = document.querySelector(".changeTheme")
const menuItems = document.querySelector("header nav ul")


toggleNav.addEventListener("click", () => {
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "block";
    } else {
        menuItems.style.display = "";
    }
})

changeTheme.addEventListener("click", () => {
    bodyDocument.classList.toggle("dark");
})