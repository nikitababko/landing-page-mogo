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
