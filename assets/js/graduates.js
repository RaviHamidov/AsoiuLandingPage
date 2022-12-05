if (window.screen.width < 768) {
    var swiper = new Swiper(".graduates", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        updateOnWindowResize: true,
    });
} else {
    var swiper = new Swiper(".graduates", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        updateOnWindowResize: true,
    });
}
swiper.loopFix();
