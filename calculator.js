
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
        return divide(num1, num2);
    }
}


// clears inputs and resets calculator
function clear() {

    display.textContent = 0;
    num = "";
    num1 = "";
    operatorSelection = "";
    num2 = "";
    console.log("Input cleared");
}


// gets operator 
function mathOperator() {

    operatorSelection = this.textContent;
    console.log(operatorSelection);
}


function getNumber() {

    num = num.concat(this.textContent);
    display.textContent = num;
    console.log(num);
}

// adds event listener to operator buttons
let operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((operator) => {
    operator.addEventListener('click', mathOperator);
});




let digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach((digits) => {
    digits.addEventListener('click', getNumber);
});


let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

let display = document.querySelector('#display');
let num1 = "";
let operatorSelection= "";
let num2 = "";
let num = "";








