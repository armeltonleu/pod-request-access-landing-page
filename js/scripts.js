const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formError(msg) {
  form.classList.remove("success");
  form.classList.add("error");
  errorMsg.style.height = "100%";
  errorMsg.style.opacity = "1";
  errorMsg.textContent = msg;
}
function formSuccess() {
  form.classList.remove("error");
  form.classList.add("success");
  errorMsg.style.height = "0";
  errorMsg.style.opacity = "0";
}

form.addEventListener("submit", (e) => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
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
