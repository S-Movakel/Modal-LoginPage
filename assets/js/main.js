const btnsWrapper = document.querySelector(".btn-wrapper")
const loginButton = document.querySelector(".btn-login");
const signUpButton = document.querySelector(".btn-signup");
const closeBtnSignUp = document.querySelector(".btn-close-signup")
const closeBtnLogin = document.querySelector(".btn-close-login")
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const cardAcc = document.querySelector(".cardAcc");
const formAcc = document.querySelector(".formAcc");
const noAcc = document.querySelector(".btn-noaccount");
const cardBtnSignUp = document.querySelector(".card-btn-signup");
const cardBtnLogin = document.querySelector(".card-btn-login");

loginButton.onclick = function () {
  login.classList.add("open");
  btnsWrapper.classList.add("close");
};

signUpButton.onclick = function () {
  signup.classList.add("open");
  loginButton.classList.add("close");
  btnsWrapper.classList.add("close");
};

cardAcc.onclick = function () {
  signup.classList.remove("open");
  login.classList.add("open");
  btnsWrapper.classList.add("close");
};

formAcc.onclick = function () {
  signup.classList.remove("open");
  login.classList.add("open");
  btnsWrapper.classList.add("close");
};

cardBtnSignUp.onclick = function () {
  signup.classList.remove("open");
  login.classList.add("open");
  btnsWrapper.classList.add("close");
};

noAcc.onclick = function () {
  login.classList.remove("open");
  signup.classList.add("open");
  btnsWrapper.classList.add("close");
};

cardBtnLogin.onclick = function () {
  login.classList.remove("open");
  signup.classList.add("open");
  btnsWrapper.classList.add("close");
};

closeBtnSignUp.onclick = function () {
  signup.classList.remove("open");
  login.classList.remove("open");
  btnsWrapper.classList.remove("close");
};

closeBtnLogin.onclick = function () {
  signup.classList.remove("open");
  login.classList.remove("open");
  btnsWrapper.classList.remove("close");
};