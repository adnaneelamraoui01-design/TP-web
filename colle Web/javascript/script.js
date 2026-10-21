document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.navbar-toggler');
    const menu = document.getElementById('mainNav');

    burger.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});