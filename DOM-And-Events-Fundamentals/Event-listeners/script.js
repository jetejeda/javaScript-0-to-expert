"use strict";
let secretNumber;
const setSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

setSecretNumber();
let generalScore = 20;
let highScore = 0;

const displayMessage = function (selector, message) {
  document.querySelector(selector).textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const userGuess = Number(document.querySelector(".guess").value);

  if (!userGuess) {
    displayMessage(".message", "⛔ No number!");
  } else if (userGuess === secretNumber) {
    displayMessage(".number", secretNumber);
    displayMessage(".message", "🎉 correct number!");

    document.getElementById("checkValue").style.display = "none";

    if (generalScore > highScore) {
      highScore = generalScore;
      displayMessage(".highscore", highScore);
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    }
  } else {
    displayMessage(
      ".message",
      userGuess > secretNumber ? "🔼 too high :(" : "🔽 too low :("
    );
    generalScore--;
  }

  if (generalScore > 0) {
    displayMessage(".score", generalScore);
  } else {
    displayMessage(".score", 0);
    document.querySelector("body").style.backgroundColor = "#f40707";
    displayMessage(".message", "😔 you lost :(, try again!");
    document.getElementById("checkValue").style.display = "none";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.getElementById("checkValue").style.display = "block";
  setSecretNumber();
  generalScore = 20;
  displayMessage(".score", generalScore);
  displayMessage(".message", "Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  displayMessage(".number", "?");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
