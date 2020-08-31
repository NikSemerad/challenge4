


var firstNameForm = document.querySelector(".form-first");
var lastNameForm = document.querySelector(".form-last");
var emailForm = document.querySelector(".form-email");
var passwordForm = document.querySelector(".form-password");

var errorMessagesArray = document.querySelectorAll(".form p");

function checkForms() {

  var firstName = document.querySelector(".form-first").value;
  var lastName = document.querySelector(".form-last").value;
  var email = document.querySelector(".form-email").value;
  var password = document.querySelector(".form-password").value;

  var score = 0;
  var yourFirstName = "";

  if (firstName == "") {
    firstNameForm.classList.add("error-form");
    errorMessagesArray[0].classList.add("error-message");
  } else {
    firstNameForm.classList.remove("error-form");
    errorMessagesArray[0].classList.remove("error-message");
    score ++;
    yourFirstName = firstName;
  }

  if (lastName == "") {
    lastNameForm.classList.add("error-form");
    errorMessagesArray[1].classList.add("error-message");
  } else {
    lastNameForm.classList.remove("error-form");
    errorMessagesArray[1].classList.remove("error-message");
    score ++;
  }

  if (validateEmail(email) == false) {
    emailForm.classList.add("error-form");
    errorMessagesArray[2].classList.add("error-message");
  } else {
    emailForm.classList.remove("error-form");
    errorMessagesArray[2].classList.remove("error-message");
    score ++;
  }

  if (password == "") {
    passwordForm.classList.add("error-form");
    errorMessagesArray[3].classList.add("error-message");
  } else {
    passwordForm.classList.remove("error-form");
    errorMessagesArray[3].classList.remove("error-message");
    score ++;
  }

  var yourFirstName = firstName;

  if (score == 4) {
    firstNameForm.value = "";
    lastNameForm.value = "";
    emailForm.value = "";
    passwordForm.value = "";
    alert("Welcome, " + yourFirstName + "!")
  }

}


function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
  }
  return (false)
}
