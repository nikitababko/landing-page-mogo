const header=document.querySelector(".header");window.onscroll=function(){window.pageYOffset>0?header.classList.add("header--fixed"):header.classList.remove("header--fixed")};const burgerMenu=document.querySelector(".burger-menu"),burgerBtn=document.querySelector(".burger-menu__btn"),headerNav=document.querySelector(".header__nav");burgerMenu.addEventListener("click",()=>{burgerBtn.classList.toggle("burger-menu__btn--active"),headerNav.classList.toggle("header__nav--active")});for(var accordions=document.getElementsByClassName("accordion__header"),i=0;i<accordions.length;i++)accordions[i].onclick=function(){this.classList.toggle("accordion__header--active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"};const carousel=document.querySelector(".reviews__carousel"),slider=document.querySelector(".reviews__slider"),next=document.querySelector(".next"),prev=document.querySelector(".prev");let direction;next.addEventListener("click",(function(){direction=-1,carousel.style.justifyContent="flex-start",slider.style.transform="translate(-100%)"})),prev.addEventListener("click",(function(){-1===direction&&(direction=1,slider.appendChild(slider.firstElementChild)),carousel.style.justifyContent="flex-end",slider.style.transform="translate(100%)"})),slider.addEventListener("transitionend",(function(){1===direction?slider.prepend(slider.lastElementChild):slider.appendChild(slider.firstElementChild),slider.style.transition="none",slider.style.transform="translate(0)",setTimeout(()=>{slider.style.transition="all 0.5s"})}),!1);const carouselTwo=document.querySelector(".reviews__carousel--two"),sliderTwo=document.querySelector(".reviews__slider--two"),nextTwo=document.querySelector(".next--two"),prevTwo=document.querySelector(".prev--two");let directionTwo;nextTwo.addEventListener("click",(function(){directionTwo=-1,carouselTwo.style.justifyContent="flex-start",sliderTwo.style.transform="translate(-100%)"})),prevTwo.addEventListener("click",(function(){-1===directionTwo&&(directionTwo=1,sliderTwo.appendChild(sliderTwo.firstElementChild)),carouselTwo.style.justifyContent="flex-end",sliderTwo.style.transform="translate(100%)"})),sliderTwo.addEventListener("transitionend",(function(){1===directionTwo?sliderTwo.prepend(sliderTwo.lastElementChild):sliderTwo.appendChild(sliderTwo.firstElementChild),sliderTwo.style.transition="none",sliderTwo.style.transform="translate(0)",setTimeout(()=>{sliderTwo.style.transition="all 0.5s"})}),!1);
//# sourceMappingURL=index.js.map