const header = document.querySelector('.header-container');
const feedback = document.querySelector('.feedback-container');

const shareBlack = document.querySelector('.share-black-container');
const shareWhite = document.querySelector('.share-white-container');

shareWhite.style.clip = 'rect(0, 0, 0, 0)';

window.addEventListener('scroll', () => {
    const headerCoords = header.getBoundingClientRect();
    const feedbackCoords = feedback.getBoundingClientRect();
    const shareCoords = shareBlack.getBoundingClientRect();
    const shareHeight = shareBlack.offsetHeight;

    let blackClipTopY = 0;
    let blackClipBottomY = shareHeight;
    let whiteClipTopY = 0;
    let whiteClipBottomY = 0;

    if (shareCoords.bottom > headerCoords.bottom) {
        blackClipBottomY = headerCoords.bottom - shareCoords.top;
        whiteClipTopY = blackClipBottomY;
        whiteClipBottomY = shareHeight;
    }

    if (shareCoords.bottom > feedbackCoords.top) {
        whiteClipBottomY = feedbackCoords.top - shareCoords.top;
        blackClipTopY = whiteClipBottomY;
        blackClipBottomY = shareHeight;
    }

    if (shareCoords.bottom > feedbackCoords.bottom) {
        blackClipBottomY = feedbackCoords.bottom - shareCoords.top;
        whiteClipTopY = blackClipBottomY;
        whiteClipBottomY = shareHeight;
    }
    
    shareBlack.style.clip = `rect(${blackClipTopY}px, auto, ${blackClipBottomY}px, 0)`;
    shareWhite.style.clip = `rect(${whiteClipTopY}px, auto, ${whiteClipBottomY}px, 0)`;
});
