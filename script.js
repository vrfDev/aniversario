let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
let autoSlideInterval;

function mostrarSlide() {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === slideIndex ? 1 : 0;
    });
}

function mudarSlide(n) {
    clearInterval(autoSlideInterval);
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    mostrarSlide();
    autoSlide();
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        if (slideIndex >= slides.length) slideIndex = 0;
        mostrarSlide();
    }, 3000);
}

mostrarSlide();
autoSlide();

function tocarMusica() {
    const musica = document.getElementById("musica");
    musica.paused ? musica.play() : musica.pause();
}