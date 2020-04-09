var openModule = document.querySelector('.slider-button__explore_js');
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