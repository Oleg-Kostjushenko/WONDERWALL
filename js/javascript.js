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

let menuBtn = document.querySelector('.menuBut')
let menu = document.querySelector('.menu')
let menuBtns = document.querySelectorAll('.menuButton')

menuBtns.forEach(function(menuBtn){
    menuBtn.addEventListener('click', function(){
        menu.classList.toggle('active')
    })
}
)

