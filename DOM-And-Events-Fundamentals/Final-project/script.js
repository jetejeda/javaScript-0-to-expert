"use strict";
let player1_section = document.querySelector(".player--0");
let player2_section = document.querySelector(".player--1");

let player1_total_score = document.getElementById("score--0");
let player2_total_score = document.getElementById("score--1");

let player1_current_score = document.getElementById("current--0");
let player2_current_score = document.getElementById("current--1");

const btn_new_game = document.querySelector(".btn--new");
const btn_roll_dice = document.querySelector(".btn--roll");
const btn_hold_score = document.querySelector(".btn--hold");

const dice_images = document.querySelector(".dice");
let current_score = 0;
let dice_value = 1;
//Decide if it's player 1 turn or if its player's 2 turn
let player_in_turn = true;

dice_images.classList.add("hidden");

const update_score = (element, score) => {
  element.textContent = score;
};

const reset_turn = () => {
  player_in_turn = !player_in_turn;
  current_score = 0;
};

const player_active = function () {
  player1_section.classList.toggle("player--active");
  player2_section.classList.toggle("player--active");
};

btn_roll_dice.addEventListener("click", function () {
  dice_value = Math.trunc(Math.random() * 6) + 1;
  dice_images.src = `./img/dice-${dice_value}.png`;
  dice_images.classList.remove("hidden");
  let player_score = player_in_turn
    ? player1_current_score
    : player2_current_score;

  if (dice_value == 1) {
    player_active();
    reset_turn();
  } else {
    current_score += dice_value;
  }
  update_score(player_score, current_score);
});

btn_hold_score.addEventListener("click", function () {
  let element;
  if (player_in_turn) {
    current_score += Number(player1_total_score.textContent);
    update_score(player1_total_score, current_score);
    update_score(player1_current_score, 0);
    element = player1_section;
  } else {
    current_score += Number(player2_total_score.textContent);
    update_score(player2_total_score, current_score);
    update_score(player2_current_score, 0);
    element = player2_section;
  }
  player_active();
  if (current_score >= 20) {
    element.classList.toggle("player--winner");
    dice_images.classList.add("hidden");
    btn_hold_score.classList.add("hidden");
    btn_roll_dice.classList.add("hidden");
  }
  reset_turn();
});

btn_new_game.addEventListener("click", function () {
  player_in_turn = true;
  player_active();
  update_score(player1_current_score, 0);
  update_score(player1_total_score, 0);

  update_score(player2_current_score, 0);
  update_score(player2_total_score, 0);
  current_score = 0;
  dice_images.classList.add("hidden");
  btn_hold_score.classList.remove("hidden");
  btn_roll_dice.classList.remove("hidden");
  player1_section.classList.remove("player--winner");
  player2_section.classList.remove("player--winner");
});
