/*
1. Create three variables
for numeric, string, and boolean data,

convert each of them to two other types(number - > string and boolean, string - > number and boolean, boolean - > number and string)
*/

let numericValue = 42;
let stringValue = '23';
let booleanValue = false;

let numericToString = String(numericValue);
let numericToBoolean = Boolean(numericValue);

console.log(`The converion of number to String is ${numericToString} and to Boolean is ${numericToBoolean}`);

let stringToNumeric = Number(stringValue);
let stringToBoolean = Boolean(stringValue);

console.log(`The converion of string to Number is ${stringToNumeric} and to Boolean is ${stringToBoolean}`);

let booleanToNumeric = Number(booleanValue);
let booleanToString = String(booleanValue);

console.log(`The converion of boolean to Number is ${booleanToNumeric} and to String is ${booleanToString}`);

/*
2. Below is a code that asks the user
for two numbers and shows their sum.

It does not work correctly.The code in the example outputs 12(
    for the
    default field values).

What is the error ? Fix it.The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12
*/

//The fix

let a = parseInt(prompt('First number?', 1));
let b = parseInt(prompt('Second number?', 2));

alert(a + b);