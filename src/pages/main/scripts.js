var openModule = document.querySelector('.hero-slider__button_js');
var closeModule = document.querySelector('.form-close_js');
var moduleWindow = document.querySelector('.modal-window_js');
var input = document.querySelector('.modal-window__input');

openModule.addEventListener('click', function () {
  moduleWindow.classList.remove('modal-window_close');
  input.focus();
});

closeModule.addEventListener('click', function () {
  moduleWindow.classList.add('modal-window_close');
  openModule.focus();
});

window.addEventListener('keydown', function (event) {
  if (!moduleWindow.classList.contains('modal-window_close') && event.code === 'Escape') {
    moduleWindow.classList.add('modal-window_close');
    input.focus();
  }
});

//mobile 

var btnMobile = document.querySelector('.header__button_js');
var btnCloseMobile = document.querySelector('.header__button-close_js');
var mobileMenu = document.querySelector('.mobile-menu_js');

btnMobile.addEventListener('click', function () {
  mobileMenu.classList.add('mobile-menu_open');
  btnMobile.style.display = 'none';
  btnCloseMobile.style.display = 'block';
});

btnCloseMobile.addEventListener('click', function () {
  mobileMenu.classList.remove('mobile-menu_open');
  btnCloseMobile.style.display = 'none';
  btnMobile.style.display = 'initial';
});