window.addEventListener("scroll", function () {
    var scrollEffect = document.querySelector("#scrollEffect");
    scrollEffect.classList.toggle("scrollEffect", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
    var noneLogo = document.querySelector(".defaultLogo");
    noneLogo.classList.toggle("noneLogo", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
    var blockLogo = document.querySelector(".scrollLogo");
    blockLogo.classList.toggle("blockLogo", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
    var noneLogo = document.querySelector(".defaultLogo");
    noneLogo.classList.toggle("noneLogo", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
    var blockLogo = document.querySelector(".scrollLogo");
    blockLogo.classList.toggle("blockLogo", window.scrollY > 0);
});
