"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let generalScore = 20;
let highScore = 0;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const userGuess = document.querySelector(".guess").value;
  console.log(`Hey you picked the number ${userGuess}`);
  if (!userGuess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (userGuess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 correct number!";
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
