//Add 0.1 and 0.2 to get a mathematically correct answer.

let num1 = 0.1;
let num2 = 0.2;

let sum = num1 + num2;

console.log(sum.toFixed(1));

//Add the string “1” and the digit 2 (both operands must be in variables), and get a mathematically correct answer.

let string1 = '1';
let number1 = 2;

let result = Number(string1) + number1;

console.log(`The sum is ${result}.`);


// Ask the user for a three-digit number and print it backwards. To solve the problem, you will need the % operator (remainder of division).

inputNumber = prompt('Please enter a valid three digit number: ');

if (isNaN(inputNumber) || inputNumber < 100 || inputNumber > 999) {
    alert('The provided number is not a 3 digit number');
}

let digit1 = inputNumber % 10;
let digit2 = Math.floor((inputNumber % 100) / 10);
let digit3 = Math.floor(inputNumber / 100);
12

//Reversing the numbers

let reversedNumber = digit1 * 100 + digit2 * 10 + digit3;

alert(`The reversed number is ${reversedNumber}`);