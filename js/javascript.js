var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewhell: true,
    keyboard: true,
})

let menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('.menu')
let item = document.querySelectorAll('.navList')

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active')
    item.addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active')
    })
})

