const navActive = document.querySelectorAll(".nav ul li");
const nav = document.querySelector(".nav");
const burgerMenu = document.querySelector(".burger");
const firstPage = document.querySelector(".first-page");

burgerMenu.addEventListener("click", () => {
    nav.classList.add(".nav-fade-in");
    nav.style.visibility = "visible";
    firstPage.addEventListener("click", () => {
        nav.style.visibility = "hidden";
    });
});

navActive[0].addEventListener("click", (e) => {
    clearOtherButtons();
    navActive[0].classList.add("active");

    location.href = "#first-page"
});
navActive[1].addEventListener("click", (e) => {
    clearOtherButtons();
    navActive[1].classList.add("active");
    location.href = "#second-page"
});
navActive[2].addEventListener("click", (e) => {
    clearOtherButtons();
    navActive[2].classList.add("active");
    location.href = "#third-page"
});

function clearOtherButtons() {
    for(let i=0;i<navActive.length;i++) {
    navActive[i].classList.remove("active");
    }
}

