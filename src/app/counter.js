'use strict';

(function() {
  const counterValue = $('.js-counter-value');
  const incrementBtn = $('.js-counter-increment');
  const decrementBtn = $('.js-counter-decrement');

  let counter = 0;

  function updateCounter(value) {
    counterValue.text(value);
  }

  incrementBtn.click(function() {
    updateCounter(++counter);
  });

  decrementBtn.click(function() {
    updateCounter(--counter);
  });

})();
