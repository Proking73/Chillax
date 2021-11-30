const animatedButton = document.querySelector(".start"); 
animatedButton.addEventListener('animationend', () => {
    animatedButton.style.display = "none";
});