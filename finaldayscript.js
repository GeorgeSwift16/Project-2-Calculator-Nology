//  creating the input variables

// adding allcalculator buttons to enable all input buttons to change display function
const allCalculatorButtonsArr = document.querySelectorAll(".calculator__button");
// to only affect input

// adding numberbuttons and decimal place class to register numper input
const numberButtonInputArr = document.querySelectorAll(".calculator__button--numeric");

// adding operand buttons input
const operandButtonInputtArr = document.querySelectorAll(".calculator__button--operand");
// adding equals button input
const equalsButtonInput = document.querySelector("#equals-button");

// adding clear button input
const clearButtonInput = document.querySelector("#clear-button");

// setting outputscreen to enable changing of innertext
const outputScreen = document.querySelector("#output-screen");


// Globalvarials to use

let runningTotalNumber = 0;
let currentOperand = "";
let currentActiveNumber = "";
let calculationAnswer = 0;


// functions 


// function for numeric input

const handleNumberInput = (event) => {
currentActiveNumber += event.target.value;
console.log(currentActiveNumber);
};

// function for operand Input
const handleOperandInput = (event) => {
    if (currentOperand === true){
        handleSecondOperand(event);
        return
    } else {
        currentOperand = event.target.value;
    }
    console.log(currentOperand);
};

// function to handle second operand input
const handleSecondOperand = (event) => {
let checkOperand = currentOperand;
    switch (checkOperand) {
        case ("+"):
            runningTotalNumber += parseFloat(currentActiveNumber);
            currentOperand = event.target.value;
            currentActiveNumber = "";
        case ("-"):
            runningTotalNumber -= parseFloat(currentActiveNumber);
            currentOperand = event.target.value;
            currentActiveNumber = "";
        case ("/"):
            runningTotalNumber = (runningTotalNumber / (parseFloat(currentActiveNumber)));
            currentOperand = event.target.value;
            currentActiveNumber = "";
        case ("*"):
            runningTotalNumber = (runningTotalNumber * (parseFloat(currentActiveNumber)));
            currentOperand = event.target.value;
            currentActiveNumber = "";
            








    }
}























































// function to handle outputscreen display
const changeOutputScreenDisplay = (event) => {
    if (event.target.value === "C") {
    (outputScreen.innerText = "0");
    return
    }
    if (event.target.value === "=") {
    (outputScreen.innerText = `${calculationAnswer}`);
    return
    }
    if (outputScreen.innerText === "0" || outputScreen.innerText == calculationAnswer) {
    outputScreen.innerText = `${event.target.value}`;
    return
    } else {
    outputScreen.innerText = outputScreen.innerText + `${event.target.value}`;
    }
};

















for (let index = 0; index < allCalculatorButtonsArr.length; index++) {
allCalculatorButtonsArr[index].addEventListener("click", changeOutputScreenDisplay)};

for (let index = 0; index < numberButtonInputArr.length; index++) {numberButtonInputArr[index].addEventListener("click", handleNumberInput)};

for (let index = 0; index < operandButtonInputtArr.length; index++) {operandButtonInputtArr[index].addEventListener("click", handleOperandInput)};

equalsButtonInput.addEventListener("click", handleEqualsInput);

clearButtonInput.addEventListener("click", handleClearButton);

console.table(num)