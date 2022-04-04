
// perform basic math operations between two numbers
function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}


// take an operator and two numbers and then calls basic math functions from above
function operate(operator, num1, num2) {

    num1 = Number(num1)
    num2 = Number(num2)

    if (operator == "+") {
        return add(num1, num2);
    }
    if (operator == "−") {
        return subtract(num1, num2);
    }
    if (operator == "x") {
        return multiply(num1, num2);
    }
    if (operator == "÷") {
        if (num2 == 0) {
            alert("Did you really just try to divide by zero???");
            clear();
        }
        else {
            return divide(num1, num2);
        }
    }
}


// clears inputs and resets calculator
function clear() {

    display.textContent = "0";
    num = "";
    num1 = "";
    answer = "";
    operatorSelection = "";
    num2 = "";
}


// gets operator 
function mathOperator(operator) {

    operatorSelection = operator;
    num1 = display.textContent;
    num = "";
}


// get number 
function getNumber(number) {

    if (num.length < 9) {   // limit size of number
        num = num.concat(number);
        display.textContent = num;
        return num;
    }
}


// rounds answer to avoid overflowing with decimals, also change to scientific notation if too big
function round(answer) {

    answer = Math.round(answer * 1000) / 1000;

    if (answer.toString().length > 9) {   // if answer is longer than 9, convert to scientific notation to avoid overflow
        answer = answer.toExponential(3);
    }

    return answer;
}


// carry out equation once equal button is pressed
function equal() {

    if (prevNum1 == num1 && prevNum2 == num2 && prevAns == answer) {
        answer = operate(operatorSelection, prevAns, num2);
    }

    else {
        num2 = display.textContent;
        answer = operate(operatorSelection, num1, num2)
    }

    answer = round(answer);
    display.textContent = answer;
    prevNum1 = num1;
    prevNum2 = num2;
    prevAns = answer;
    num = "";
}


// add decimal point and don't allow user to add one if already one decimal point in number
function decimalPoint() {

    if (num.indexOf(".") > -1) {
        return;
    }
    else {
        num = num.concat(".");
        display.textContent = num;
    }
}


// allow user to backspace
function deleteNumber() {

    display.textContent = display.textContent
        .toString()
        .slice(0, -1);
    num = display.textContent;
}


// add keyboard support
function keyboardSupport(e) {

    if (e.key >= 0 && e.key <= 9) getNumber(e.key);
    if (e.key === ".") decimalPoint();
    if (e.key === "=" || e.key === "Enter") equal();
    if (e.key === "Backspace" || e.key === "Delete") deleteNumber();
    if (e.key === "+") mathOperator("+");
    if (e.key === "-") mathOperator("−");
    if (e.key === "/") mathOperator("÷");
    if (e.key === "*") mathOperator("x");
}


// change numbers between positive and negative
function plusMinus() {

    if (display.textContent.indexOf("-") > -1) {
        display.textContent = display.textContent.replace("-","");
    }
    else {
        display.textContent = "-" + display.textContent;
    }
}


// declaring variables
let display = document.querySelector('#display');
let num1 = "";
let operatorSelection= null;
let num2 = "";
let num = "";
let answer = "";
let prevNum1 = "asdf";   // placeholder text needed for equal function to work properly
let prevNum2 = "asdf";
let prevAns = "asdf";

// adds event listener to operator buttons
let operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => mathOperator(operator.textContent));
});

// add event listener to digits buttons
let digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach((digits) => {
    digits.addEventListener('click', () => getNumber(digits.textContent));
});

// reset calculator when user presses AC button
let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

// call operate function when equal button is pressed
let equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', equal);

// add decimal point when decimal button pressed
let decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', decimalPoint);

// delete last digit or decimal when clicked
let deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', deleteNumber);

// add functionality for +/- button
let plusMinusButton = document.querySelector('#plusminus');
plusMinusButton.addEventListener('click', plusMinus);

// add listener for when user presses a key
window.addEventListener('keydown', keyboardSupport);



