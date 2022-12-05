const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    searchToggleOne = document.querySelector(".searchToggleOne"),
    searchToggleTwo = document.querySelector(".searchToggleTwo"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".sidebarClose");

// js code to toggle search box
searchToggleOne.addEventListener("click", () => {
    searchToggleOne.classList.toggle("active");
});

searchToggleTwo.addEventListener("click", () => {
    searchToggleTwo.classList.toggle("active");
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

sidebarClose.addEventListener("click", () => {
    nav.classList.remove("active");
});
