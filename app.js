// create a variable for hamburger menu
const hamb = document.querySelector('.hamburger');

// create a variable for nav
const mainNav = document.querySelector('.main-nav');

// create a function that:
// 1. adds event listener on 'click' to hamburger menu
hamb.addEventListener('click', function(event) {
   // hamb.style.display = 'none';
   mainNav.classList.toggle('ham-menu');
   mainNav.style.cssText = "transition: opacity 0.3s ease;";
})