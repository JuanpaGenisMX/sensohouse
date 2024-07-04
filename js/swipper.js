document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.carrousel-container', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next.carrousel',
            prevEl: '.swiper-button-prev.carrousel',
        },
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 20000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});