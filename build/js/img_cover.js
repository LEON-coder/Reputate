let buttonSlider = document.querySelector('.button-block-slide')
let blockFirst = document.querySelector('.block-first')
let blockSecond = document.querySelector('.block-second')
let blockThird = document.querySelector('.block-third')
let blockFour = document.querySelector('.block-four');
let argumentsBlock = document.querySelector('.arguments__block')


// Накладывание блоков с нижнего на верхний


buttonSlider.addEventListener('click', function() {
  if(blockFirst.classList.contains('block-visibile')) {
    blockFirst.classList.remove('block-visibile');

    } else {
    blockFirst.classList.add('block-visibile');
     blockSecond.classList.add('block--active');
    };
});

buttonSlider.addEventListener('click', function() {
  if( blockSecond.classList.add('block--active')) {
    blockSecond.classList.remove('block-visibile');
      blockSecond.classList.add('block-visibile');
  } else {
     blockSecond.classList.add('block-visibile');
    blockThird.classList.add('block--active');
    };
}) ;

// buttonSlider.addEventListener('click', function() {
//   if(blockThird.classList.contains('block-visibile')) {
//     blockThird.classList.remove('block-visibile');
//   } else {
//       blockThird.classList.add('block-visibile');
//     };
// }) ;

// buttonSlider.addEventListener('click', function() {
//   if(blockFour.classList.contains('block-visibile')) {
//     blockFour.classList.remove('block-visibile');
//   } else {
//      blockFour.classList.add('block-visibile');
//   }

// }) ;