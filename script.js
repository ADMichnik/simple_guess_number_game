'use strict';

// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.message`).textContent = `Correct number is?`;

// document.querySelector(`.number`).textContent = `13`;
// document.querySelector(`.score`).textContent = `10`;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    displayMessage(`No number!`);
  } else if (guess === secretNumber) {
    displayMessage(`Correct number!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       displayMessage() = `Too high!`;
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       displayMessage() = `You lost the game!`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       displayMessage() = `Too low!`;
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       displayMessage() = `You lost the game!`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
