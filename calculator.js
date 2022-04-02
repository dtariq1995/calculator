
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
            alert("Everyone knows you can't divide by zero!!");
            clear();
        }
        else {
            return divide(num1, num2);
        }
    }
}


// clears inputs and resets calculator
function clear() {

    display.textContent = 0;
    num = "";
    num1 = "";
    answer = "";
    operatorSelection = "";
    num2 = "";
    console.log("Input cleared");
}


// gets operator 
function mathOperator(operator) {

    operatorSelection = operator;
    num1 = display.textContent;
    num = "";
}

// get number 
function getNumber(number) {

    num = num.concat(number);
    display.textContent = num;
    return num;
}


// rounds answer
function round(answer) {

    return Math.round(answer * 1000) / 1000;
}


// carry out equation once equal button is pressed
function equal() {

    num2 = display.textContent;
    let answer = operate(operatorSelection, num1, num2)
    answer = round(answer);
    display.textContent = answer;
    console.log(num1);
    console.log(operatorSelection);
    console.log(num2);
    console.log(answer);
}

// add decimal point and don't allow user to add one if already one decimal point in number
function decimalPoint() {

    if (display.textContent.indexOf('.') > -1) {
        return;
    }
    else {
        num = num.concat('.');
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

// add keyboard support  WORK ON THIS
function keyboardSupport(e) {
    if (e.key >= 0 && e.key <= 9) getNumber(e.key);
    if (e.key === '.') decimalPoint();
    if (e.key === '=' || e.key === "Enter") equal();
    if (e.key === 'Backspace' || e.key === "Delete") deleteNumber();
    if (e.key === "+") mathOperator("+");
    if (e.key === "-") mathOperator("−");
    if (e.key === "/") mathOperator("÷");
    if (e.key === "*") mathOperator("x");
}


let display = document.querySelector('#display');
let num1 = "";
let operatorSelection= null;
let num2 = "";
let num = "";

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

// add keyboard support
window.addEventListener('keydown', keyboardSupport);



