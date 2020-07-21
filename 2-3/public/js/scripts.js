const toggleNav = document.querySelector(".toggle")
const menuItems = document.querySelector("header nav ul")
const windowWidth = window.innerWidth


toggleNav.addEventListener("click", () => {
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "block";
    } else {
        menuItems.style.display = "";
    }
})