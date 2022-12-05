window.addEventListener("scroll", function () {
  var scrollLogo = document.querySelector("#stickyLogo");
  scrollLogo.classList.toggle("scrollLogo", window.scrollY > 0);
});
