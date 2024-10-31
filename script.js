"use strict";

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".label-message").textContent = message;
};

const displayScore = function (message) {
  document.querySelector(".score").textContent = message;
};

const displayNumber = function (message) {
  document.querySelector(".btn-correct").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  var guess = Number(document.querySelector(".guess-number").value);

  if (!guess) {
    displayMessage("⛔ No Number!");
  } else if (guess !== number && score > 1) {
    if (guess < number) {
      displayMessage("🪫 Too Low!");

      score = score - 1;
    } else if (guess > number && guess <= 20) {
      displayMessage("⚡ Too High!");

      score--;
    } else if (guess < 1 || guess > 20) {
      displayMessage("🚫 Out of Bound!");
    }

    displayScore(score);
  } else if (guess === number) {
    displayNumber(number);

    displayMessage("🍬 Correct Number!");

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    } else {
      document.querySelector(".highscore").textContent = highScore;
    }

    document.querySelector(".upper-part").style.backgroundColor = "#60b347";
    document.querySelector(".lower-part").style.backgroundColor = "#60b347";
    document.querySelector(".btn-correct").style.width = "8rem";
  } else {
    displayMessage("🚨 You lose the Game!");

    displayScore(0);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing  . . .");

  displayScore(20);

  displayNumber("?");
  document.querySelector(".guess-number").value = "";
  document.querySelector(".upper-part").style.backgroundColor = "#222";
  document.querySelector(".lower-part").style.backgroundColor = "#222";
});
