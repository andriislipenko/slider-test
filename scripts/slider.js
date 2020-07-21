const SLIDE_SHOW_DELAY = 3000;

const slider = document.querySelector('.slider');
const naigators = document.querySelectorAll('.navigator');
const slides = document.querySelectorAll('.image-wrapper');
const slidesLength = slides.length;

let currentSlideIndex = 0;
let slideshowTimerId;

setActiveNavigator();

function nextSlide() {
    move(1);
}

function prevSlide() {
    move(-1);
}

function move(change) {
    currentSlideIndex += change;
    normalizeIndex();
    slider.scroll(slides[currentSlideIndex].offsetLeft, 0);
    setActiveNavigator();
}

function setActiveNavigator() {
    for (let i = 0; i < slidesLength; i++) {
        if (i == currentSlideIndex) {
            naigators[i].classList.add('active-navigator');
        } else {
            naigators[i].classList.remove('active-navigator');
        }
    }
}

function toggleSlideShow() {
    if (slideshowTimerId) {
        clearInterval(slideshowTimerId);
        slideshowTimerId = null;
        return;
    }

    move(1);
    slideshowTimerId = setInterval(() => {
        move(1);
    }, SLIDE_SHOW_DELAY);
}

function normalizeIndex() {
    if (currentSlideIndex >= slidesLength) {
        currentSlideIndex = currentSlideIndex % slidesLength;
    }

    if (currentSlideIndex < 0) {
        currentSlideIndex = slidesLength + (currentSlideIndex % slidesLength);
    }
}

window.addEventListener('resize', () => {
    move(0);
})
