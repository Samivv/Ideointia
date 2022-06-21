const navActive = document.querySelectorAll(".nav ul li");
const nav = document.querySelector(".nav");
const burgerMenu = document.querySelector(".burger");
const firstPage = document.querySelector(".first-page");
const sections = document.querySelectorAll("section");

const options = {
    threshold: 0.7
}
let observer = new IntersectionObserver(navCheck, options);



function navCheck(entries) {
    
    entries.forEach(entry => {
        if(entry.target.getAttribute("id") == "first-page") {
            clearOtherButtons();
            navActive[0].classList.add("active");
        } else if(entry.target.getAttribute("id") == "second-page") {
            clearOtherButtons();
            navActive[1].classList.add("active");
        } else if(entry.target.getAttribute("id") == "third-page") {
            clearOtherButtons();
            navActive[2].classList.add("active");
        }
    });
}
navActive[0].classList.add("active");
sections.forEach(section => {
    observer.observe(section);
})

burgerMenu.addEventListener("click", () => {
    nav.classList.add(".nav-fade-in");
    nav.style.visibility = "visible";
    firstPage.addEventListener("click", () => {
        nav.style.visibility = "hidden";
    });
});

for(let i=0;i<navActive.length;i++) {
    navActive[i].addEventListener("click", (e) => {
        clearOtherButtons();
        // navActive[i].classList.add("active");
        // location.href = "#"+sections[i].getAttribute("id");
        sections[i].scrollIntoView({block: "start", behavior: "smooth"});
    });
}
function clearOtherButtons() {
    for(let i=0;i<navActive.length;i++) {
    navActive[i].classList.remove("active");
    }
}