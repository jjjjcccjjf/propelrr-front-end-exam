const heroCarouselTrack = document.querySelector('.hero-carousel-track');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let heroCurrentPosition = 0;

const heroSlideWidth = window.innerWidth; // Adjust this based on your carousel-container width
// const heroSlideWidth = 320; // Adjust this based on your carousel-container width

function slide(direction) {
    const maxPosition = -(heroCarouselTrack.childElementCount - 1) * heroSlideWidth;

    if (direction === 'prev') {
        heroCurrentPosition += heroSlideWidth;
        if (heroCurrentPosition > 0) {
            heroCurrentPosition = maxPosition;
        }
    } else if (direction === 'next') {
        heroCurrentPosition -= heroSlideWidth;
        if (heroCurrentPosition < maxPosition) {
            heroCurrentPosition = 0;
        }
    }

    heroCarouselTrack.style.transform = `translateX(${heroCurrentPosition}px)`;
}

prevButton.addEventListener('click', () => slide('prev'));
nextButton.addEventListener('click', () => slide('next'));