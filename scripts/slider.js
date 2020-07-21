const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.image-wrapper');
const slidesLength = slides.length;

let currentSlideIndex = 0;

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
}

function normalizeIndex() {
    if (currentSlideIndex >= slidesLength) {
        currentSlideIndex = currentSlideIndex % slidesLength;
    }

    if (currentSlideIndex < 0) {
        currentSlideIndex = slidesLength + (currentSlideIndex % slidesLength);
    }
}
