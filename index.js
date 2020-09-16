const slides = document.getElementsByClassName('carousel-item');
const indicators = document.getElementsByClassName('indicator');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

for(const indicator of indicators){
    indicator.addEventListener('click', showSlide)
}

function showSlide(e){
    clearInterval(autoplaySlides);
    slidePosition = parseInt(e.target.id)
    hideAllSlides()
    slides[slidePosition].classList.add("carousel-item-visible");
    indicators[slidePosition].classList.add('indicator-active')
    autoplaySlides = setInterval(playSlides, 3000)
}

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
    for (let indicator of indicators) {
        indicator.classList.remove('indicator-active');
    }
}

function playSlides() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    indicators[slidePosition].classList.add('indicator-active')
}

function moveToNextSlide() {
    clearInterval(autoplaySlides);
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    indicators[slidePosition].classList.add('indicator-active')
    
    autoplaySlides = setInterval(playSlides, 3000)
}

function moveToPrevSlide() {
    clearInterval(autoplaySlides)
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    indicators[slidePosition].classList.add('indicator-active')
    autoplaySlides = setInterval(playSlides, 5000) //
}


let autoplaySlides = setInterval(playSlides, 5000)