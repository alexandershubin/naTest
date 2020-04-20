'use strict';
window.addEventListener('DOMContentLoaded', function () {
  const mainButton = document.querySelector('.patient-info__button');
  const popup = document.querySelector('.popup');
  const overlay = document.querySelector('.overlay');
  const closeButton = document.querySelector('.popup-title__close');

  mainButton.addEventListener('click', () => {
    popup.classList.add('popup-show');
    overlay.classList.add('overlay-popup')
  });

  closeButton.addEventListener('click', () => {
    popup.classList.remove('popup-show');
    overlay.classList.remove('overlay-popup')
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
        overlay.classList.remove("overlay-popup");
      }
    }
  });

  overlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
    overlay.classList.remove("overlay-popup");
  });
});
