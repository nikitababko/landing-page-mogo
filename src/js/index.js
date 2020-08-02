/*=============================
Nav-bar fixed
=============================*/
const header = document.querySelector(".header");

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        header.classList.add("header--fixed");
    } else {
        header.classList.remove("header--fixed");
    }
};

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

/*=============================
Accordion
=============================*/
var accordions = document.getElementsByClassName("accordion__header");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        this.classList.toggle("accordion__header--active");

        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };
}

/*=============================
Reviews carousel
=============================*/
const carousel = document.querySelector(".reviews__carousel");
const slider = document.querySelector(".reviews__slider");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let direction;

next.addEventListener("click", function () {
    direction = -1;
    carousel.style.justifyContent = "flex-start";
    slider.style.transform = "translate(-100%)";
});

prev.addEventListener("click", function () {
    if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
    }
    carousel.style.justifyContent = "flex-end";
    slider.style.transform = "translate(100%)";
});

slider.addEventListener(
    "transitionend",
    function () {
        // get the last element and append it to the front

        if (direction === 1) {
            slider.prepend(slider.lastElementChild);
        } else {
            slider.appendChild(slider.firstElementChild);
        }

        slider.style.transition = "none";
        slider.style.transform = "translate(0)";
        setTimeout(() => {
            slider.style.transition = "all 0.5s";
        });
    },
    false
);

/*=============================
Reviews carousel two
=============================*/
const carouselTwo = document.querySelector(".reviews__carousel--two");
const sliderTwo = document.querySelector(".reviews__slider--two");

const nextTwo = document.querySelector(".next--two");
const prevTwo = document.querySelector(".prev--two");
let directionTwo;

nextTwo.addEventListener("click", function () {
    directionTwo = -1;
    carouselTwo.style.justifyContent = "flex-start";
    sliderTwo.style.transform = "translate(-100%)";
});

prevTwo.addEventListener("click", function () {
    if (directionTwo === -1) {
        directionTwo = 1;
        sliderTwo.appendChild(sliderTwo.firstElementChild);
    }
    carouselTwo.style.justifyContent = "flex-end";
    sliderTwo.style.transform = "translate(100%)";
});

sliderTwo.addEventListener(
    "transitionend",
    function () {
        // get the last element and append it to the front

        if (directionTwo === 1) {
            sliderTwo.prepend(sliderTwo.lastElementChild);
        } else {
            sliderTwo.appendChild(sliderTwo.firstElementChild);
        }

        sliderTwo.style.transition = "none";
        sliderTwo.style.transform = "translate(0)";
        setTimeout(() => {
            sliderTwo.style.transition = "all 0.5s";
        });
    },
    false
);
