"use strict";
let secretNumber;
const setSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

setSecretNumber();
let generalScore = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const userGuess = Number(document.querySelector(".guess").value);

  if (!userGuess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (userGuess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 correct number!";
    document.getElementById("checkValue").style.display = "none";
    if (generalScore > highScore) {
      highScore = generalScore;
      document.querySelector(".highscore").textContent = highScore;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    }
  } else if (userGuess > secretNumber) {
    document.querySelector(".message").textContent = "🔼 too high :(";
    generalScore--;
  } else {
    document.querySelector(".message").textContent = "🔽 too low :(";
    generalScore--;
  }

  if (generalScore > 0) {
    document.querySelector(".score").textContent = generalScore;
  } else {
    document.querySelector(".score").textContent = 0;
    document.querySelector("body").style.backgroundColor = "#f40707";
    document.querySelector(".message").textContent =
      "😔 you lost :(, try again!";
    document.getElementById("checkValue").style.display = "none";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.getElementById("checkValue").style.display = "block";
  setSecretNumber();
  generalScore = 20;
  document.querySelector(".score").textContent = generalScore;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
