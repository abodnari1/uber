let hamburger = document.querySelector('.menu-hamburger');
let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu_item');
hamburger.addEventListener('click', function() {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('menu-hamburger_active');
});

for (let el of menuItem) {
    el.addEventListener('click', function() {
        menu.classList.remove('menu_active');
        hamburger.classList.remove('menu-hamburger_active');
    });
};