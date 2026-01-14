const form = document.getElementById("form");
const errorMsg = document.getElementById("error-msg");

function formSubmit(event) {
  event.preventDefault();
  console.log("formulaire soumis");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = document.getElementById("email");

  if (!regex.test(email)) {
    console.log("mauvais email");
    form.classList.toggle("error");
  }
}

function logSubmit(event) {
  event.preventDefault();
  console.log("coucou");
}

form.addEventListener("submit", logSubmit);
