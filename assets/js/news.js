var swiper = new Swiper(".newSwiperOne", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    updateOnWindowResize: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        420: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});

swiper.loopFix();

var swiper = new Swiper(".newSwiperTwo", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    updateOnWindowResize: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        420: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});
