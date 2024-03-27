import {
    countUp
} from "./functions/counting.js";
const jsCountUp = document.querySelectorAll(".js-countUp");

function startCounting() {
    if (jsCountUp.length > 0) {
        jsCountUp.forEach(number => {
            countUp(number);
        })
    }
}

// // STICKY HEADER

window.addEventListener("scroll", () => {
    
    const header = document.querySelector(".l-head");
    const headerOffset = 150;
    (window.scrollY >= headerOffset) ? header.classList.add('sticky') : header.classList.remove('sticky');  

    if(window.scrollY >= jsCountUp[0].clientTop && !jsCountUp[0].classList.contains('done')) {
        jsCountUp[0].classList.add('done');
        startCounting()
    };
});

// COUNT



// SLIDER

const swiperStudents = document.querySelector('.swiper-students');

if (swiperStudents) {
    new Swiper(swiperStudents, {
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1180: {
                slidesPerView: 3,
            }
        },
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
}

// VIDEO

const playVideo = document.querySelectorAll(".play-video");

if (playVideo.length > 0) {
    playVideo.forEach(single => {
        single.addEventListener('click', () => {
            single.previousElementSibling.play();
            single.previousElementSibling.setAttribute('controls', true);
            single.remove();
        })
    })
}

// Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const section = document.querySelectorAll('section');
section.forEach((el)=> observer.observe(el));