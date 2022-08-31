let loginForm = document.getElementById("formLogin");
let registerForm = document.getElementById("formRegister");
let landingPage = document.getElementById("landingPage");
let nameUser = document.getElementById("nameUser");
let started = document.getElementById("started");
let userRegister = document.getElementById("userRegister");
let passRegister = document.getElementById("passRegister");
let userInput = document.getElementById("userInput");
let passInput = document.getElementById("passInput");

let hello = "Selamat datang, ";

loginForm.style.display = "none";
started.style.display = "none";

function onRegister() {
  localStorage.setItem("user", userRegister.value);
  localStorage.setItem("pass", passRegister.value);

  if (
    localStorage.getItem("user") == "admin" &&
    localStorage.getItem("pass") == "admin"
  ) {
    localStorage.setItem("role", "Admin");
  } else if (
    localStorage.getItem("user") == "moderator" &&
    localStorage.getItem("pass") == "moderator"
  ) {
    localStorage.setItem("role", "Moderator");
  } else {
    localStorage.setItem("role", "User");
  }

  loginForm.style.display = "block";
  registerForm.style.display = "none";
}

function toLogin() {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
}

function onLogin() {
  if (
    localStorage.getItem("user") == userInput.value &&
    localStorage.getItem("pass") == passInput.value
  ) {
    let username = localStorage.getItem("user");
    let roles = localStorage.getItem("role");
    loginForm.style.display = "none";
    landingPage.style.display = "none";
    started.style.display = "block";

    nameUser.innerHTML = hello + username + "(" + roles + ")";
  } else {
    alert("user atau pass salah");
  }
}

function onLogout() {
  localStorage.clear();
  location.reload();
}
