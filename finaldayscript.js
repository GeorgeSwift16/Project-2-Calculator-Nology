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
let currentActiveNumberString = "";
let calculationAnswer = 0;
let currentActiveNumberNumber = 0;

// functions 

// function for numeric input

const handleNumberInput = (event) => {
    currentActiveNumberString += event.target.value;
};

// function for operand Input
const handleOperandInput = (event) => {

    if (currentOperand === true) {
        handleSecondOperand();
    } else if (event.target.value == "=") {
        handleEqualsInput();
    }
    else {
    return currentOperand = event.target.value;
    }

};

// function to handle second operand input - parse float of current number input string, check the operand, run correct calc using the float number then reset the values and pass back to handleoperand input to assign the current operand to event.target.value.
const handleSecondOperand = () => {
    currentActiveNumberNumber = 0;
    currentActiveNumberNumber += parseInt(currentActiveNumberString);
    runningTotalNumber += currentActiveNumberNumber;
    currentActiveNumberNumber = 0;
    currentActiveNumberString = "";
    let checkOperand = currentOperand;
        if (checkOperand == "+") {
            runningTotalNumber += currentActiveNumberNumber;
            currentOperand = "";
            handleOperandInput();
        } else if (checkOperand == "-") {
            runningTotalNumber -= currentActiveNumberNumber;
            currentOperand = "";
            handleOperandInput();
        } else if (checkOperand = "/") {
            runningTotalNumber = (runningTotalNumber / currentActiveNumberNumber);
            currentOperand = "";
            handleOperandInput();
        } else {
            runningTotalNumber = (runningTotalNumber * currentActiveNumberNumber);
            currentOperand = "";
            handleOperandInput();
        }
    
};

// Function to handle clear button input

const handleClearButton = () => {
    runningTotalNumber = 0;
    currentOperand = "";
    currentActiveNumberString = "";
    calculationAnswer = 0;
    currentActiveNumberNumber = 0;
};

const handleEqualsInput = () => {
    handleSecondOperand();
    calculationAnswer = runningTotalNumber;
    runningTotalNumber = 0;
};


// function to handle outputscreen display
const changeOutputScreenDisplay = (event) => {
    if (event.target.value === "C") {
    (outputScreen.innerText = "0");
    return
    }
    if (event.target.value === "=") {
    return outputScreen.innerText = calculationAnswer;
    }
    if (outputScreen.innerText === "0" || outputScreen.innerText == calculationAnswer) {
    outputScreen.innerText = `${event.target.value}`;
    return
    } else {
    outputScreen.innerText = outputScreen.innerText + `${event.target.value}`;
    }
};


// event listeners
for (let index = 0; index < allCalculatorButtonsArr.length; index++) {
allCalculatorButtonsArr[index].addEventListener("click", changeOutputScreenDisplay)};

for (let index = 0; index < numberButtonInputArr.length; index++) {numberButtonInputArr[index].addEventListener("click", handleNumberInput)};

for (let index = 0; index < operandButtonInputtArr.length; index++) {operandButtonInputtArr[index].addEventListener("click", handleOperandInput)};

equalsButtonInput.addEventListener("click", handleEqualsInput);

clearButtonInput.addEventListener("click", handleClearButton);

