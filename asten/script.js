let menu = document.querySelector('#menu-btn');
let navbar = document.querrySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new swiper(".home-slider", {
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".sniper-button-prev",
    },
});

var swiper = new swiper(".home-slider", {
    loop:true,
    spaceBetween: 20,
    autoHeight:true,
    grabCursor:true,
    breapoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        }

    },
