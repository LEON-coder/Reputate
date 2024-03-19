let imgArguments = document.querySelector('.img-arguments')
let blockFirst = document.querySelector('.block-first')
let blockSecond = document.querySelector('.block-second')
let blockThird = document.querySelector('.block-third')
let blockFour = document.querySelector('.block-four');
let argumentsBlock = document.querySelector('.arguments__block')


// Накладывание блоков с нижнего на верхний
imgArguments.addEventListener('click', function() {
  if(blockFirst.classList.contains('block-visibile')) {
    blockFirst.classList.remove('block-visibile');
    } else {
      blockFirst.classList.add('block-visibile');
    };
})


imgArguments.addEventListener('click', function() {
  if(blockSecond.classList.contains('block-visibile')) {
    blockSecond.classList.remove('block-visibile');
    } else {
    blockSecond.classList.add('block-visibile');
    blockFirst.classList.remove('block-visibile');
    };
}) ;

imgArguments.addEventListener('click', function() {
  if(blockFour.classList.contains('block-visibile')) {
    blockFour.classList.remove('block-visibile');
    } else {
      blockFour.classList.add('block-visibile');
    };
}) ;

imgArguments.addEventListener('click', function() {
  if(blockFour.classList.contains('block-visibile')) {
    blockFour.classList.remove('block-visibile');
    blockThird.classList.add('block-visibile');
    } else {
      blockFour.classList.remove('block-visibile');
    };
}) ;





// function visibleBlock({

// })