const menu = document.querySelector('.main-nav__wrapper');
const menuBtn = document.querySelector('.button-burger');

menu.classList.remove('main-nav__wrapper--nojs');
menuBtn.classList.remove('button-burger--nojs');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
