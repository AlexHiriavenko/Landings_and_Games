const burger = document.querySelector(".main-header__burger");
const nav = document.querySelector(".main-header__nav");


burger.addEventListener("click", function(event) {
    burger.classList.toggle("main-header__burger--active");
    nav.classList.toggle("main-header__nav--active");

    event.isClick = true;
})

document.body.addEventListener("click", function(event) {
    if (event.isClick === true || event.target.classList.contains("main-header__nav-link") 
    || event.target.classList.contains("main-header__nav-list-item") || event.target.classList.contains("main-header__nav")) return
    burger.classList.remove("main-header__burger--active");
    nav.classList.remove("main-header__nav--active");
})


window.onresize = viewport;

function viewport() {
    if (document.documentElement.clientWidth > 480) {
        burger.classList.remove("main-header__burger--active");
        nav.classList.remove("main-header__nav--active");
    }
}