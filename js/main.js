"use strict";

/*  
    Name: Elijah Kipkemboi
    coding: 04
    Purpose: write javascript code to do client-side input validation.
*/

//buttons
function main() {
  let clearBtn = document.getElementById("clear-btn");
  let sendBtn = document.getElementById("send-btn");

  function validEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validate() {
    let errorMessage = "";
    //elements
    let nameInput = document.getElementById("name-input");
    let emailInput = document.getElementById("email-input");
    let reEmailInput = document.getElementById("re-email-input");
    let subjectInput = document.getElementById("subject-input");
    let textarea = document.getElementById("textarea-input");

    //trim values
    let nameVal = nameInput.value.trim();
    let emailVal = emailInput.value.trim();
    let reEmailVal = reEmailInput.value.trim();
    let subjectVal = subjectInput.value.trim();
    let textareaVal = textarea.value.trim();

    //check if inputs are empty
    if (nameVal == "") {
      errorMessage += "First name cannot be empty. <br>";
    }
    if (emailVal == "") {
      errorMessage += "Email cannot be empty. <br>";
    }
    if (reEmailVal == "") {
      errorMessage += "Return email cannot be empty. <br>";
    }
    if (subjectVal == "") {
      errorMessage += "Subject cannot be empty. <br>";
    }
    if (textareaVal == "") {
      errorMessage += "Textarea cannot be empty. <br>";
    }

    //check email match
    if (emailVal !== reEmailVal) {
      errorMessage += "Emails must match.<br>";
    }
    //validate the email and return true or false
    let emailIsValid = validEmail(emailVal);
    if (!emailIsValid) {
      errorMessage += "Emails are not valid.<br>";
    }
    return errorMessage;
  }

  function sendBtnHandler() {
    let errorDiv = document.getElementById("error-div");
    let message = validate();

    if (message == "") {
      errorDiv.innerHTML = "Sent ✅";
      return true;
    } else {
      errorDiv.innerHTML = message;
      return false;
    }
  }
  function clearBtnHandler() {
    let errorDiv = document.getElementById("error-div");
    let inputGroup = document.getElementsByClassName("input-group");

    for (let i = 0; i < inputGroup.length; i++) {
      inputGroup[i].value = "";
    }
    errorDiv.innerHTML = "";
  }

  sendBtn.onclick = sendBtnHandler;
  clearBtn.onclick = clearBtnHandler;
}

window.onload = main();
