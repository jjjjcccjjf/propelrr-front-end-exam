const carouselTrack = document.querySelector('.carousel-track');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

function onTouchStart(e) {
    if (e.type === 'touchstart') {
        startPosition = e.touches[0].clientX;
    } else {
        startPosition = e.clientX;
    }

    isDragging = true;
    carouselTrack.style.transition = 'none';
}

function onTouchMove(e) {
    if (!isDragging) return;

    let currentPosition;
    if (e.type === 'touchmove') {
        currentPosition = e.touches[0].clientX;
    } else {
        currentPosition = e.clientX;
    }

    const diff = currentPosition - startPosition;
    currentTranslate = prevTranslate + diff;
    carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
}

function onTouchEnd() {
    isDragging = false;
    carouselTrack.style.transition = 'transform 300ms ease';

    // Snap to the closest slide
    const slideWidth = carouselTrack.children[0].offsetWidth;
    const slidesToMove = Math.round(currentTranslate / slideWidth);
    prevTranslate = slidesToMove * slideWidth;
    carouselTrack.style.transform = `translateX(${prevTranslate}px)`;
}

carouselTrack.addEventListener('touchstart', onTouchStart);
carouselTrack.addEventListener('touchmove', onTouchMove);
carouselTrack.addEventListener('touchend', onTouchEnd);

carouselTrack.addEventListener('mousedown', onTouchStart);
carouselTrack.addEventListener('mousemove', onTouchMove);
carouselTrack.addEventListener('mouseup', onTouchEnd);
carouselTrack.addEventListener('mouseleave', onTouchEnd);

