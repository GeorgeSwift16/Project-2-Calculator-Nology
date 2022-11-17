const button7 = document.querySelector("#button-7")
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