"use strict";
const overlay = document.querySelector(".overlay");
const modal_view = document.querySelector(".modal");
const btn_close_modal = document.querySelector(".close-modal");
/**
 If we just use the querySelector method,
 it will only select the first element with that class,
 but for this exercise we will need all elements with that class.
 That's why we are using querySelectorAll.
 */
const modal_buttons = document.querySelectorAll(".show-modal");

const hide_modal = function () {
  modal_view.classList.add("hidden");
  overlay.classList.add("hidden");
};

modal_buttons.forEach((element) => {
  element.addEventListener("click", function () {
    overlay.classList.remove("hidden");
    modal_view.classList.remove("hidden");
  });
});

overlay.addEventListener("click", hide_modal);

btn_close_modal.addEventListener("click", hide_modal);

//Global events
document.addEventListener("keypress", function (e) {
  console.log(e);
  if (e.key === "Enter" && !modal_view.classList.contains("hidden")) {
    hide_modal();
  }
});
