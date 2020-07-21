const slider = document.querySelector('.slider');
const naigators = document.querySelectorAll('.navigator');
const slides = document.querySelectorAll('.image-wrapper');
const slidesLength = slides.length;

let currentSlideIndex = 0;

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
