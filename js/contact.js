// Get form data
const successForm = document.querySelector(".successForm");
const contactForm = document.querySelector("#contactForm");

const fullname = document.querySelector("#fullname");
const fullnameError = document.querySelector("#fullnameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

let successMsg = false;
successForm.style.visibility="hidden";

function validateForm(event) {
  event.preventDefault();

  const validatedName = checkLength(fullname.value, 2);
  const validatedAddress = checkLength(address.value, 4);
  const validatedEmail = validateEmail(email.value);
  const validatedMessage = checkLength(message.value, 10);


  if (fullname) {
    fullnameError.style.display = "none";
  } else {
    fullnameError.style.display = "block";
  }

  if (email) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (address) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (message) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (validatedName && validatedEmail && validatedAddress && validatedMessage) {
    successMsg = true;
  }

  if(successMsg) {
    successForm.style.visibility="visible";
    successForm.innerHTML = fullname.value + " " + "Form was successfully validated";
  } else {
    successForm.style.visibility="hidden";
    successForm.innerHTML = "";
  }
}



contactForm.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if(value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
