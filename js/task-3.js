"use strict";

const textInput = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

textInput.addEventListener("input", function () {
  const inputValue = textInput.value.trim();

  if (inputValue === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = inputValue;
  }
});
