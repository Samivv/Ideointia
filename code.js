const navActive = document.querySelectorAll(".nav ul li");
navActive[0].addEventListener("click", (e) => {
    clearOtherButtons()
    navActive[0].classList.add("active");
});
navActive[1].addEventListener("click", (e) => {
    clearOtherButtons()
    navActive[1].classList.add("active");
});
navActive[2].addEventListener("click", (e) => {
    clearOtherButtons()
    navActive[2].classList.add("active");
});

function clearOtherButtons() {
    for(let i=0;i<navActive.length;i++) {
    navActive[i].classList.remove("active");
    }
}