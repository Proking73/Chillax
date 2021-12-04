const animatedButton = document.querySelector(".start"); 
animatedButton.addEventListener('click', () => {
    animatedButton.style.opacity = "0";
    animatedButton.style.pointerEvents = "none";
});