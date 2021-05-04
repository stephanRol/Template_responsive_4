'use strict';

const menuButton = document.querySelector('.menu-btn')

menuButton.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
})

//SCROLL REVEAL 
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
