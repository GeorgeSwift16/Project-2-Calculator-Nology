/* const button7 = document.querySelector("#button-7");
const buttonPlus = document.querySelector("#button-plus");

// checking the number buttons type
// convert element to js variable
console.log(button7.value);
// checked the value pulls through with this property - value is 7
x = button7.value + 6;
// found out that the value is actually a string value so no math function
console.log(x);
// try to make it a num

let y = parseInt(button7.value);
// parse int works to change string to num - great success
let z = y + 10;
console.log(z);

// checking the operator button types
console.log(buttonPlus.value);

p = z + buttonPlus.value + 7;
let b = eval(buttonPlus.value);

console.log(b);
// breaking down the problem - pseudocode

// dans steps
// button - use event listeners "click" to activate our function. - DOM
// when i click the button how do we know the value of the button.

// keep track of buttons pressed on screen display - Change innertext of html on display. On clear - set value of calc bariable to 0 and change innertext to 0. use A serperate event listener to reset variables and innertext of display to 0. 
// append another value to the end - array push 
// we run a calculation and show result on the screen
// limit operators to only one before integers or return error, ie can press 5+++6. restrict operators and decimal buttons. - use event listener (on dble click event or more unless has int restrict to just 1 input of operator.  )
// if divide by 0 then return an error message.
// limit the number of characters show on the screen - length, reduce font size at greater lengths ie at 5 characters font size 1rem, 10 characters 

// keep one function to do one thing. 
// functions should seperate our logic. 
// setup/scaffold js in clear manner 
// dom elements -> global variables -> event listeners -> starting logic. 
// use console.log to help debug them. 

// my breakdown 
// inputs 
// the buttons numbers values are strings - no math - must be converted to int - parseint on the value.
// the logical operators buttons are also string and cant be used to do math so we need to not use the values of these and instead set a event listener for click of these to input the logical operator instead. but also show this in the display. - Use a switch case to input the correct logical operator. 
// we need an else if for if the user presses the C button to clear the output. or callback function for if C pressed then let (overarching variable = 0) and show this. 


// potential issues
// variable types - string vs int - we need to get them all to int to do math or circumvent this issue 
// if the user divides by 0 the output will be infinity, we need an if statement for this case to show the output of "N/A"
// very long numbers 

// outputs 
// we need a display showing the input as it is typed - set the output as a variable and change the innerhtml element of it with the calculation as typed then on submit replace this with the value found. 
// we need the submit (equals) button to run the calculation and output the result - use the submit button as the overarching function and have 9 callback functions for the numeric buttons. Use a switch function to replace any input of the operator buttons to replace them with the logical operator in the calculation. 

// potential solution options - 
// 1. parse all value on click into an array using push() or similar - the array is displayed live to give user feedback, then on submit run a for loop that pulls down the value of everything in the array and has some like the following conditions - if value= 1-9 parseint the value then add to the variable for the calculation. else if the value is +-/* switch case it into the correct logical operator and add it to the function. 
// 2. convert all inputs at source using callback functions to their correct operators, then use strings of the logical operates in place of the converted value. Or simply pass the value up to both the display and also through for conversion. 



/* 
const getOutput = (number1, operator, number2) => {
    if (operator === "-") {
        return (number1-number2)
    }
    if (operator === "+") {
        return (number1+number2)
    }
    if (operator === "/"){
        return (number1/number2)
    }
    else {
        return (number1*number2)
    }
};

console.log(getOutput(5, "+", 4)); */