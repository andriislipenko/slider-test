const ANIMATION_TRIGGER = 'animation-start';

window.addEventListener('scroll', (event) => {
    const borderAnimated = document.querySelectorAll('.border-animated');
    const visbleHeinght = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

    borderAnimated.forEach((item) => {
        const itemCoords = item.getBoundingClientRect();

        if (itemCoords.bottom > 0 && itemCoords.bottom < visbleHeinght) {
            item.classList.add(ANIMATION_TRIGGER);
        }
    })
});
