const mainNav = document.querySelector(`.main-nav`);
/* const navList = document.querySelector(`.nav-list`); */
const hamburgerMenu = document.querySelector(`.hamburger-menu`);

hamburgerMenu.addEventListener(`click`, function() {
    mainNav.classList.toggle(`open`);
});