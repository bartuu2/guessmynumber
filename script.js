'use strict';

let high_score = 0;
let score = 20;
let random_number = Math.trunc(Math.random() * 20) + 1;

const dmessage = function (text) {
  document.querySelector('.message').textContent = text;
};

/////// Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  ///////////////////////// When there is no guess
  if (!guess) {
    console.log('No Value');
    //////////////// // When the player win
  } else if (guess === random_number) {
    dmessage('Congrats !!! 👏');
    document.querySelector('.number').textContent = random_number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > high_score) {
      high_score = score;
      document.querySelector('.highscore').textContent = high_score;
    }
    /////////////// When the number is biger
  } else if (guess > random_number) {
    if (score > 1) {
      dmessage('Number is too big');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      dmessage('You lost the game :( ');
      document.querySelector('.score').textContent = 0;
    }
    //////////////////////// //When the number is lower
  } else if (guess < random_number) {
    if (score > 1) {
      dmessage('Number is too low');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      dmessage('You lost the game :( ');
      document.querySelector('.score').textContent = 0;
    }
  }
});
/////// ///////////   Again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  dmessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  random_number = Math.trunc(Math.random() * 20) + 1;
});
