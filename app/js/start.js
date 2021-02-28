// Here we write your JS code
const burger = document.querySelector('.menu-burger');
const menu = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-active');
  menu.classList.toggle('menu-active')
})