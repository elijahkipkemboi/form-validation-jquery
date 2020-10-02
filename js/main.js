"use strict";

/*  
    Name: Elijah Kipkemboi
    coding: 05
    Purpose: write jquery code to do client-side input validation.
*/
function clearForm() {
  $("#error-div").text("");
  $("#first-name").val("");
  $("#last-name").val("");
}
function validate() {
  let errorMessage = "";
  let fName = $("#first-name").val().trim();
  let lName = $("#last-name").val().trim();

  if (fName === "") {
    errorMessage += "First name cannot be empty.<br>";
  }

  if (lName === "") {
    errorMessage += "Last name cannot be empty.<br>";
  }

  return errorMessage;
}

$(document).ready(function () {
  $("#send-btn").click(function () {
    let msg = validate();

    if (msg === "") {
      clearForm();
      $("#error-div").html("SENT ✅");
    } else {
      $("#error-div").html(msg);
    }
  });
  //clear everything
  $("#clear-btn").click(clearForm);
});
