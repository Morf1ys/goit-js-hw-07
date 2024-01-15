"use strict";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = loginForm.elements.email.value.trim();
  const passwordValue = loginForm.elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const user = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(user);

  loginForm.reset();
});
