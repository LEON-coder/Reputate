let BurgerMenu = document.querySelector('.nav__burger-menu');
let burgerMenulist = document.querySelector('.burger-menu-list');
let buttomClose = document.querySelector('.buttom-close');

BurgerMenu.addEventListener('click', function() {
  burgerMenulist.classList.add('burger-menu-show');
})


buttomClose.addEventListener('click', function() {
  burgerMenulist.classList.remove('burger-menu-show');
})