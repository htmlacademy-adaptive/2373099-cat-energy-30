let menuBtn = document.querySelector('.main-header__toggle');
let menu = document.querySelector('.main-nav__wrapper');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
