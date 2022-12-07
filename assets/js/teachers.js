var swiper = new Swiper(".teachers", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    updateOnWindowResize: true,
    navigation: {
        nextEl: ".forteachersNext",
        prevEl: ".forteachersPrev",
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        420: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
    },
});
