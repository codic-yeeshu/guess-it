'use strict';

let secretNum = Math.ceil(Math.random() * 19);
let currScore = 20;
let highScore = 0;

function setContent(ele, content) {
  ele.textContent = content;
}

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const guessMsg = document.querySelector('.message');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highestScore = document.querySelector('.highscore');
const userInput = document.querySelector('.guess');

checkBtn.addEventListener('click', function () {
  const userGuess = Number(userInput.value);
  let content;
  if (currScore > 1) {
    if (!userGuess) {
      content = '⛔️ No number!';
      currScore--;
    } else if (userGuess > secretNum) {
      content = '📈 Too high...';
      currScore--;
    } else if (userGuess < secretNum) {
      content = '📉 Too low..';
      currScore--;
    } else {
      content = '🪅 You won!!!';
      body.style.backgroundColor = '#60b347';
      setContent(number, secretNum);
      number.style.width = '20rem';
      highScore = Math.max(currScore, highScore);
      setContent(highestScore, highScore);
    }
  } else {
    content = '🤡 You lost!!!';
    body.style.backgroundColor = 'red';
    setContent(number, secretNum);
    number.style.width = '20rem';
    score--;
  }

  setContent(guessMsg, content);
  setContent(score, currScore);
});

againBtn.addEventListener('click', function () {
  secretNum = Math.ceil(Math.random() * 19);
  currScore = 20;
  setContent(score, currScore);
  setContent(guessMsg, 'Start Guessing...');
  setContent(number, '?');
  number.style.width = '15rem';
  body.style.backgroundColor = '#222';
  userInput.value = '';
});
