
//  creating the input 

// adding allcalculator buttons to enable all input buttons to enable display function
const allCalculatorButtonsArr = document.querySelectorAll(".calculator__button");

// adding numberbuttons class to register numper input
const NumberButtonInputArr = document.querySelectorAll(".calculator__button--numeric");

// adding operand buttons input
const operandButtonInputtArr = document.querySelectorAll(".calculator__button--operand");
// adding equals button input
const equalsButtonInput = document.querySelector("#equals-button");

// adding clear button input
const clearButtonInput = document.querySelector("#clear-button");

// setting outputscreen to enable changing of innertext
const outputScreen = document.querySelector("#output-screen");


// calculator object to hold all methods and keys/values

const calculator = {
    runningTotal: 0,
    currentNumberString: "",
    currentNumberNum: 0,
    hascurrentNumberStringDecimal: false,
    currentOperand: "",
    calcAswer: 0,
    handleNumberInput(event){
    this.currentNumberString += event.target.value;
    return
    },
    handleOperandInput(event, handleNewOperand){
        if (this.currentOperand) {
            this.currentNumberNum += parseFloat(this.currentNumberString);
            this.handleNewOperand(event);
            this.currentOperand = "";
            this.currentOperand = "" + event.target.value;
        return
        }
        else {
            this.currentOperand += event.target.value;
            return 
        } 
        },
    handleNewOperand(event) {
        if (this.currentOperand === "+") {
            this.runningTotal = (this.runningTotal + this.currentNumberNum);
            this.currentNumberNum = 0;
            this.currentNumberString = "";
        return
        }
        else if (this.currentOperand === "-") {
            this.runningTotal = (this.runningTotal - this.currentNumberNum);
            this.currentNumberNum = 0;
            this.currentNumberString = "";
        return
        }
        else if (this.currentOperand === "*") {
            this.runningTotal = (this.runningTotal * this.currentNumberNum);
            this.currentNumberNum = 0;
            this.currentNumberString = "";
        return
        }
        else if (this.currentOperand === "+") {
            this.runningTotal = (this.runningTotal / this.currentNumberNum);
            this.currentNumberNum = 0;
            this.currentNumberString = "";
        return
        }
        else {
            return alert("uh oh somethings gone wrong -newoperand");
        }
    },
    handleClearButton() {
        this.runningTotal = 0;
        this.currentNumberString = 0;
        this.currentNumberNum = 0;
        this.currentOperand = "";
        this.calcAswer = 0;
        outputScreen.innerText = "0";
    },
    handleEqualsButton(handleNewOperand) {
        this.currentNumberNum += parseFloat(this.currentNumberString);
        this.calcAswer =  this.runningTotal,
        this.handleNewOperand();
        this.runningTotal = 0;
        this.currentNumberString = 0;
        this.currentNumberNum = 0;
        this.currentOperand = "";
    return
    },
    changeOutputScreenDisplay(event){
        if (event.target.value === "C") {
        (outputScreen.innerText = "0");
        return
        }
        if (event.target.value === "=") {
        (outputScreen.innerText = `${this.calcAswer}`);
        return
        }
        if (outputScreen.innerText === "0") {
        outputScreen.innerText = `${event.target.value}`;
        return
        } else {
        outputScreen.innerText = outputScreen.innerText + `${event.target.value}`;
        return
        }
    },      
};





// creating the listeners

for (let index = 0; index < allCalculatorButtonsArr.length; index++) {
    allCalculatorButtonsArr[index].addEventListener("click", calculator.changeOutputScreenDisplay);
};
for (let index = 0; index < NumberButtonInputArr.length; index++) {
    NumberButtonInputArr[index].addEventListener("click", calculator.handleNumberInput);
};
for (let index = 0; index < operandButtonInputtArr.length; index++) {
    operandButtonInputtArr[index].addEventListener("click", calculator.handleOperandInput(calculator.handleNewOperand));
};
equalsButtonInput.addEventListener("click", calculator.handleEqualsButton (calculator.handleNewOperand));

clearButtonInput.addEventListener("click", calculator.handleClearButton);