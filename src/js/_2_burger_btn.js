/*=============================
Burger btn
=============================*/
const burgerMenu = document.querySelector(".burger-menu");
const burgerBtn = document.querySelector(".burger-menu__btn");
const headerNav = document.querySelector(".header__nav");

burgerMenu.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger-menu__btn--active");
    headerNav.classList.toggle("header__nav--active");
});
