const navActive = document.querySelectorAll(".nav ul li");
const nav = document.querySelector(".nav");
const burgerMenu = document.querySelector(".burger");
const firstPage = document.querySelector(".first-page");

burgerMenu.addEventListener("click", () => {
    nav.style.visibility = "visible";
    firstPage.addEventListener("click", () => {
        nav.style.visibility = "hidden";
    });
});

navActive[0].addEventListener("click", (e) => {
    location.href = "index.html"
});
navActive[1].addEventListener("click", (e) => {
    location.href = "showcase.html"
});
navActive[2].addEventListener("click", (e) => {
    location.href = "contact.html"
});

function clearOtherButtons() {
    for(let i=0;i<navActive.length;i++) {
    navActive[i].classList.remove("active");
    }
}

