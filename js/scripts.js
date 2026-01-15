const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formError(msg) {
  form.classList.remove("success");
  form.classList.add("error");
  errorMsg.style.display = "block";
  errorMsg.textContent = msg;
}
function formSuccess() {
  form.classList.remove("error");
  form.classList.add("success");
  errorMsg.style.display = "none";
}

form.addEventListener("submit", (e) => {
  const emailValue = email.value.trim();

  if (email === "") {
    e.preventDefault();
    console.log(emailValue);
    formError("Oops! Please add your email");
  } else if (!regex.test(emailValue)) {
    e.preventDefault();
    console.log(emailValue);
    formError("Oops! Please check your email");
  } else {
    e.preventDefault();
    console.log(emailValue);
    formSuccess();
  }
});
