//variables
const start = document.querySelector(".start");
const wrapper = document.querySelector("header");
const title = document.querySelector("h1");
//logic
function hide() {
    wrapper.style.animation = "fadeOut 0.75s ease-out";
}
wrapper.addEventListener('animationend', () => {
    wrapper.style.display = "none";
});