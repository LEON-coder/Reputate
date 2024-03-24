let buttonSlider = document.querySelector('.img-arguments')
let blockFirst = document.querySelector('.block-first')
let blockSecond = document.querySelector('.block-second')
let blockThird = document.querySelector('.block-third')
let blockFour = document.querySelector('.block-four');
let argumentsBlock = document.querySelector('.arguments__block');

// Накладывание блоков друг на друга
buttonSlider.addEventListener('click', function () {
blockSecond.classList.add('block-active');
  if(blockFirst.classList.contains('.block-visible')) {
    blockFirst.classList.remove('.block-visible');
    blockFirst.classList.remove('order-first');
    } else {
    blockFirst.classList.add('block-visible');
    };
});

blockFirst.addEventListener('click', function () {
  blockThird.classList.add('block-active');
  if( blockSecond.classList.contains('.block-visible', '')) {
    blockSecond.classList.remove('.block-visible');
  } else {
       blockSecond.classList.add('block-visible');
    };
}) ;

blockSecond.addEventListener('click', function () {
blockFour.classList.add('block-active');
  if(blockThird.classList.contains('.block-visible')) {
    blockThird.classList.remove('.block-visible');
     blockThird.classList.add('.block-active');
  } else {
      blockThird.classList.add('block-visible');
    };
}) ;

blockThird.addEventListener('click', function () {
blockFour.classList.toggle('block-active');
  if (blockFour.classList.contains('.block-visible')) {
    blockFirst.classList.add('.block-active');
    blockFour.classList.remove('.block-visible');
  } else {
     blockFour.classList.add('block-visibile');
  }
});

blockThird.addEventListener('click', function () {
  blockFour.classList.remove('block-visible');
  blockThird.classList.remove('block-visible');
  blockThird.classList.remove('block-active');
  blockSecond.classList.remove('block-visible');
  blockSecond.classList.remove('block-active');
  blockFirst.classList.remove('block-visible');
  blockFirst.classList.add('block-active');
})