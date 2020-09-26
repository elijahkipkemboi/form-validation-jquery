"use strict";
//buttons
let clearBtn = document.getElementById("clear-btn");
let sendBtn = document.getElementById("send-btn");
//inputs
let nameInput = document.getElementById("name-input");
let emailInput = document.getElementById("email-input");
let reEmailInput = document.getElementById("re-email-input");
let subjectInput = document.getElementById("subject-input");
let textarea = document.getElementById("textarea-input");
//divs
let errorDiv = document.getElementById("error-div");
//add errors to this array
let errorsArr = [];
let inputsArr = [nameInput, emailInput, reEmailInput, subjectInput, textarea];

function emptyInput(elem) {
  //if input is empty
  if (elem.value.length == 0) {
    return true;
  } else {
    return false;
  }
}

function createElement(elem, text = "") {
  let element = document.createElement(elem);
  element.innerHTML = text;
  return element;
}

function redBorder(elem) {
  elem.style.borderColor = "red";
}

function greyBorder(elem) {
  elem.style.borderColor = "grey";
}

function greenBorder(elem) {
  elem.style.borderColor = "green";
}
function validEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function matchEmail(a, b) {
  let val1 = a.trim();
  let val2 = b.trim();
  if (val1 === val2) return true;
  else return false;
}

//send button is clicked
function sendHandler() {
  //clear errors
  errorDiv.innerHTML = "";
  //check any empty inputs

  if (emptyInput(nameInput)) errorsArr.push("name cannot be empty");
  if (emptyInput(emailInput)) errorsArr.push("First email cannot be empty");
  if (emptyInput(reEmailInput)) errorsArr.push("Return email cannot be empty");
  if (emptyInput(subjectInput)) errorsArr.push("Subject cannot be empty");
  if (emptyInput(textarea)) errorsArr.push("Textarea cannot be empty");

  //email validation'
  let emailval1 = emailInput.value.trim();
  let emailval2 = reEmailInput.value.trim();

  let match = matchEmail(emailval1, emailval2);
  if (!match) {
    errorsArr.push("Emails must match");
  }
  if (!validEmail(emailval1)) {
    errorsArr.push("First email is not valid");
  }
  if (!validEmail(emailval2)) {
    errorsArr.push("Return email is not valid");
  }

  //create list and append to errorDiv

  for (let i = 0; i < errorsArr.length; i++) {
    let text = errorsArr[i];
    let li = createElement("li", text);
    errorDiv.appendChild(li);
  }

  if (errorsArr.length == 0) {
    let li = createElement("li", "Sent  ✅");
    errorDiv.appendChild(li);
    for (let i = 0; i < inputsArr.length; i++) {
      let elem = inputsArr[i];
      greenBorder(elem);
    }
  }
}

//clear button is clicked
function clearHandler() {
  let check = confirm("Clear the form?");
  if (!check) return false;
  //clear errro div
  errorDiv.innerHTML = "";
  //clear inputs
  nameInput.value = "";
  emailInput.value = "";
  reEmailInput.value = "";
  subjectInput.value = "";
  textarea.value = "";

  for (let i = 0; i < inputsArr.length; i++) {
    let elem = inputsArr[i];
    grayBorder(elem);
  }
}
//event handlers
sendBtn.onclick = sendHandler;

clearBtn.onclick = clearHandler;
