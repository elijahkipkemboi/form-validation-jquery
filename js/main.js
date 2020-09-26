"use strict"

//get the operand strings and convert to float or NaN
function getOperands() {
    var operands = [];
    operands[0] = parseFloat($('#op1').val());
    operands[1] = parseFloat($('#op2').val());
    return operands;
}

/*
 * driver function for the calculate button
 */
function calculate() {
    //set up variables
    var operands = null;
    var answer = "error";
    operands = getOperands();

    //check to see we have valid operands
    if (!isNaN(operands[0]) && !isNaN(operands[1])) {
        //based on the radio button checked, perform the calculation
        switch ($('input[name=operator]:checked').val()) {
            case "add":
                answer = (operands[0] + operands[1]).toFixed(2);
                break;
            case "sub":
                answer = (operands[0] - operands[1]).toFixed(2);
                break;
            case "multi":
                answer = (operands[0] * operands[1]).toFixed(2);
                break;
            case "div":
                //checks for divide by zero before dividing
                answer = operands[1] ? (operands[0] / operands[1]).toFixed(2) : "undefined";
                break;
        }
    }
    
    //put the answer in the answer area
    $('#answer-area').html("The answer is: " + answer);
}

/*
 * event handler for the calculate button
 */
$("#calcbtn").click(function () {
    calculate();
    return false;
});

/*
 * will execute only after the document is rendered and
 * before the user can interact with the page
 */
$( document ).ready(function() {
    //prepopulate the answer area
    $('#answer-area').html("Answer Area");
});
