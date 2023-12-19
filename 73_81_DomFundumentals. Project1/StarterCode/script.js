'use strict';

// const startGuess = document.querySelector('.guess-message');
// console.log(startGuess);

// startGuess.textContent = 'Correct!';

// const question = document.querySelector('.question');
// console.log(question);

// const score = document.querySelector('.score');
// console.log(score);

document.querySelector('.check').addEventListener('click', onInputChange);

function onInputChange() {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Set number!';
  }
}
