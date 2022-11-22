// dom elements
// output screen display
const outputScreen = document.querySelector("#output-screen");
// equals / submit button
const equalsButton = document.querySelector("#equals-button");
// clear button
const clearButton = document.querySelector("#clear-button");
// decimal place button
const decimalPlaceButton = document.querySelector("#decimalPlace-Button");
// logical operator buttons
const plusMinusButton = document.querySelector("#plusMinus-button");
const percentButton = document.querySelector("#percent-button");
const divideButton = document.querySelector("#divide-button");
const multiplyButton = document.querySelector("#multiply-button");
const minusButton = document.querySelector("#minus-button");
const plusButton = document.querySelector("#plus-button");
// numeric buttons
const zeroButton = document.querySelector("#zero-button");
const oneButton = document.querySelector("#one-button");
const twoButton = document.querySelector("#two-button");
const threeButton = document.querySelector("#three-button");
const fourButton = document.querySelector("#four-button");
const fiveButton = document.querySelector("#five-button");
const sixButton = document.querySelector("#six-button");
const sevenButton = document.querySelector("#seven-button");
const eightButton = document.querySelector("#eight-button");
const nineButton = document.querySelector("#nine-button");

// global variables
const calculationAnswer = 2 + "b" + "c";


// when the function hits the operator make it recognise this is not a number and stop recording the input and store it away. 

// functions
// output screen
// functino to change the outputscreen display on click of button or clear
const changeOutputScreenDisplay(event){
  if (event.target.value === "C") {
    (outputScreen.innerText = "0");
    return
  }
  if (event.target.value === "=") {
    (outputScreen.innerText = `${calculationAnswer}`);
    return
  }
  if (outputScreen.innerText === "0") {
    outputScreen.innerText = `${event.target.value}`;
    return
  } else {
    outputScreen.innerText = outputScreen.innerText + `${event.target.value}`;
  }
};

let x = outputScreen.innerText;
console.log(x);

// delete form

// event listeners
// equals/submit button
equalsButton.addEventListener("click", changeOutputScreenDisplay);
// clear button
clearButton.addEventListener("click", changeOutputScreenDisplay);
// decimal place button
decimalPlaceButton.addEventListener("click", changeOutputScreenDisplay);
// logical operator buttons
plusMinusButton.addEventListener("click", changeOutputScreenDisplay);
percentButton.addEventListener("click", changeOutputScreenDisplay);
divideButton.addEventListener("click", changeOutputScreenDisplay);
multiplyButton.addEventListener("click", changeOutputScreenDisplay);
minusButton.addEventListener("click", changeOutputScreenDisplay);
plusButton.addEventListener("click", changeOutputScreenDisplay);
// numeric buttons
zeroButton.addEventListener("click", changeOutputScreenDisplay);
oneButton.addEventListener("click", changeOutputScreenDisplay);
twoButton.addEventListener("click", changeOutputScreenDisplay);
threeButton.addEventListener("click", changeOutputScreenDisplay);
fourButton.addEventListener("click", changeOutputScreenDisplay);
fiveButton.addEventListener("click", changeOutputScreenDisplay);
sixButton.addEventListener("click", changeOutputScreenDisplay);
sevenButton.addEventListener("click", changeOutputScreenDisplay);
eightButton.addEventListener("click", changeOutputScreenDisplay);
nineButton.addEventListener("click", changeOutputScreenDisplay);
