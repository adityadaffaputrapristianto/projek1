document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#carouselExample');

    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            ride: 'carousel'
        });
    }
});
