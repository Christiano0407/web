const mainNav = document.querySelector(`.main-nav`);
/* const navList = document.querySelector(`.nav-list`); */
const hamburgerMenu = document.querySelector(`.hamburger-menu`);

hamburgerMenu.addEventListener(`click`, function() {
    mainNav.classList.toggle(`open`);
});

gsap.fromTo(`.hero-clipped`, {scaleX: 0}, {duration:1, scaleX:1});