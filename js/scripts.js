const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const logoContainer = document.getElementsByClassName("logo-container");
const themeSwitcher = document.getElementById("theme-switcher");
const logo = document.getElementById("logo");

const mediaQuery = window.matchMedia("(max-width: 480px)");
let errorBlock;
if (mediaQuery.matches) {
  errorBlock = email;
  document.body.append(themeSwitcher);
} else {
  errorBlock = form;
}

/* function formError(msg) {
  errorBlock.classList.remove("success");
  errorBlock.classList.add("error");
  errorMsg.style.height = "100%";
  errorMsg.style.opacity = "1";
  errorMsg.textContent = msg;
}
function formSuccess() {
  errorBlock.classList.remove("error");
  errorBlock.classList.add("success");
  errorMsg.style.height = "0";
  errorMsg.style.opacity = "0";
  errorMsg.textContent = "Form ok";
} */

function formError(msg) {
  errorBlock.classList.remove("success");
  errorBlock.classList.add("error");
  email.setAttribute("aria-invalid", "true");
  errorMsg.setAttribute("aria-hidden", "false");
  errorMsg.classList.remove("hide");
  errorMsg.classList.add("show");
  errorMsg.textContent = msg;
}
function formSuccess() {
  errorBlock.classList.remove("error");
  errorBlock.classList.add("success");
  email.setAttribute("aria-invalid", "false");
  errorMsg.setAttribute("aria-hidden", "true");
  errorMsg.classList.remove("show");
  errorMsg.classList.add("hide");
  errorMsg.textContent = "Form ok";
}

form.addEventListener("submit", (e) => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    e.preventDefault();
    formError("Oops! Please add your email");
  } else if (!regex.test(emailValue)) {
    e.preventDefault();
    formError("Oops! Please check your email");
  } else {
    e.preventDefault();
    formSuccess();
  }
});

function imgSwitcher(image, light, dark) {
  let source = image.getAttribute("src");
  let title = image.getAttribute("title");
  if (source.includes(light)) {
    source = source.replace(light, dark);
    image.setAttribute("title", "Switch to dark mode");
  } else {
    source = source.replace(dark, light);
    image.setAttribute("title", "Switch to light mode");
  }
  image.setAttribute("src", source);
}

themeSwitcher.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  imgSwitcher(logo, "logo.svg", "logo-light.svg");
  imgSwitcher(themeSwitcher, "light.svg", "dark.svg");
});
