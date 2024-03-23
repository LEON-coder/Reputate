let buttonSlider = document.querySelector('.img-arguments')
let blockFirst = document.querySelector('.block-first')
let blockSecond = document.querySelector('.block-second')
let blockThird = document.querySelector('.block-third')
let blockFour = document.querySelector('.block-four');
let argumentsBlock = document.querySelector('.arguments__block');

// Накладывание блоков с нижнего на верхний


buttonSlider.addEventListener('click', function () {
  blockFirst.classList.toggle('block-visible');
blockSecond.classList.add('block-active ');
  // if(blockFirst.classList.contains('.block-visible')) {
  //   blockFirst.classList.remove('.block-visible');
  //   argumentsBlock.style.position = "left: 0";
  //   } else {
  //   blockFirst.classList.add('block-visible');
  //   };
});

blockFirst.addEventListener('click', function () {
    blockSecond.classList.toggle('block-visible');
//   if( blockSecond.classList.contains('.block-visible')) {
//     blockFirst.classList.remove('.block-visible');
//      blockThird.classList.add('.block-active');
//   } else {
//        blockSecond.classList.add('block-visible');
//  blockThird.classList.remove('block-active');
//     };
}) ;

blockSecond.addEventListener('click', function () {
  blockThird.classList.toggle('block-visible');
  // if(blockSecond.classList.contains('.block-visible')) {
  //   blockSecond.classList.remove('.block-visible');
  //    blockThird.classList.add('.block-active');
  // } else {
  //     blockSecond.classList.add('block-visible');
  //   };
}) ;

blockFour.addEventListener('click', function () {
    blockThird.classList.toggle('block-visible');
    blockFirst.classList.remove('block-visible');
  // if(blockFour.classList.contains('.block-visible')) {
  //   blockFour.classList.remove('.block-visible');
  // } else {
  //    blockFour.classList.add('block-visibile');
  // }

}) ;