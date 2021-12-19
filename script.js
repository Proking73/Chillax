//fade-in wrapper; body onload="function" function makes the wrapper fade in but not working because 'animation-end' event, fix? maybe nest inside of function or other event?

//variables
const start = document.querySelector(".start");
const wrapper = document.querySelector("header");
const title = document.querySelector("h1");
const choices = document.querySelector(".choices");
const choiceItem1 = document.querySelector(".choice-item1");
const choiceItem2 = document.querySelector(".choice-item3");
const choiceItem3 = document.querySelector(".choice-item3");
//animations
const fadeOut = "fadeOut 0.75s ease-out";
const fadeIn = "fadeIn 0.5s ease-in";
//logic
function hide() {
    wrapper.style.animation = fadeOut;
}
wrapper.addEventListener('animationend', () => {
    wrapper.style.display = "none";
    choices.style.display = "flex";
    choices.style.animation = fadeIn;
});
choices.addEventListener('animationend', () => {
    choices.style.opacity = "1";
});

choiceItem1.addEventListener('click', () => {
    choices.style.animation = fadeOut;
    event.target.addEventListener('animationend', () => {
        event.target.href = "https://www.w3schools.com/java/java_date.asp";
    });
});