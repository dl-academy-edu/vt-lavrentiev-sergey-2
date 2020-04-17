document.querySelector(".toys-form__range").oninput = function() {
  this.style.background = 'linear-gradient(to right, #C29974 0%, #C29974 ' + this.value/5 + '%, rgba(0, 0, 0, 0.5) ' + this.value/5 + '%, rgba(0, 0, 0, 0.5) 100%)'
};