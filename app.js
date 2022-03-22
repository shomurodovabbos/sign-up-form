const form = document.getElementById("form");
const firstName = document.getElementById("name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (firstName.value === "") {
    showError(firstName, "First Name cannot be empty");
  } else {
    showSuccess(firstName);
  }
  if (lastName.value === "") {
    showError(lastName, "Last Name cannot be empty");
  } else {
    showSuccess(lastName);
  }
  if (email.value === "") {
    showError(email, "Looks like this is not an email");
  } else if (!isValidEmail(email)) {
    showError(email, "Looks like this is not an email");
  } else {
    showSuccess(email);
  }
  if (password.value) {
    showError(password, "Password cannot be empty");
  } else {
    showSuccess(password);
  }
  e.input = "";
});

//Show input success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
}

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Check email is valid
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}
