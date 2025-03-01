const button = document.getElementById('burgerHeaderButton');
const header = document.getElementById('header');
const navItems = document.getElementById('navMobile');
const navItemsDesktop = document.getElementById('navDesktop');
const itemsHeader = document.getElementById('itemsHeader');
const cartHeader = document.getElementById('cartHeader');

window.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth >= 924) {
        navItemsDesktop.style.display = "flex"
    }
    if (window.innerWidth <= 924) {
        navItems.style.display = "flex"
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 924) {
        cartHeader.style.display = "none"
        navItemsDesktop.style.display = "flex"
        navItems.style.display = 'none'
        button.style.display = 'none'
        button.checked = false;
    }
    if (window.innerWidth <= 924) {
        navItemsDesktop.style.display = "none"
        navItems.style.display = 'flex'
    }
});

window.addEventListener('click', () => {
    if (button.checked === true) {
        cartHeader.style.display = "flex"
        cartHeader.style.justifyContent = 'center'
        cartHeader.style.animation = 'fade-in .5s forwards';
    }
    if (button.checked === false) {
        cartHeader.style.display = "none"
        cartHeader.style.animation = 'fade-out .5s forwards';
    }
})

document.querySelector('main').addEventListener('click', () => {
    cartHeader.style.animation = 'fade-out .5s forwards';
    setTimeout(() => {
        cartHeader.style.display = 'none';
    }, 300);
    button.checked = false;
});