const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__toggle');
const navBurger = document.querySelector('.button-burger');

navMain.classList.remove('main-nav--nojs');
navBurger.classList.remove('button-burger--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

navToggle.addEventListener('click', function () {
  if (navBurger.classList.contains('button-burger--closed')) {
    navBurger.classList.remove('button-burger--closed');
    navBurger.classList.add('button-burger--opened');
  } else {
    navBurger.classList.add('button-burger--closed');
    navBurger.classList.remove('button-burger--opened');
  }
});
