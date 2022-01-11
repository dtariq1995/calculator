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
    if (operator == "-") {
        return subtract(num1, num2);
    }
    if (operator == "*") {
        return multiply(num1, num2);
    }
    if (operator == "/") {
        return divide(num1, num2);
    }
}

function updateDisplay() {
    let display = document.querySelector("#display");
    display.textContent = "45";
}



function getOperator() {

    let operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach((operator) => {
        operator.addEventListener('click', () => {
            operatorSelection = operator.textContent;
            console.log(operatorSelection);
            return operatorSelection;
        });
    });
}



function getNums() {

    let display = document.querySelector('#display');
    let num1 = "";
    let digitButtons = document.querySelectorAll('.digit');
    digitButtons.forEach((digits) => {
        digits.addEventListener('click', () => {
            num1 = num1.concat(digits.textContent);
            display.textContent = num1;
            console.log(num1);
            return num1;
        });
    });
}


a = 15;
b = 3;
console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));
console.log(operate("+", a, b));

let display = document.querySelector('#display');


getNums();
getOperator();


