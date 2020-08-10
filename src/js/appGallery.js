let body = document.body;
let toggleBtn = document.querySelector(`.toggle-btn`);
let currentTheme = localStorage.getItem(`currentTheme`);

toggleBtn.addEventListener(`click`, function () {
    body.classList.toggle(`dark-theme`);
})