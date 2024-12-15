//Request a user’s name and display the response “Hello, [name]”.

const userName = prompt("Please enter your name: ");

console.log(`The username is ${userName}.`);

// Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.

const currentYear = parseInt(2024);
const birthYear = parseInt(prompt("Please enter your year of birth: "));

const age = currentYear - birthYear;

console.log(`You are ${age} years old.`);

//Request a length of a side of a square from a user and display the perimeter of the square.

const sideLength = parseInt(
  prompt("Please enter the length of a side of the square: ")
);

const perimeter = 4 * sideLength;

console.log(`The perimeter of the square is ${perimeter}.`);

//Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.

const distance = parseInt(
  prompt("Please enter the distance between the two cities in kilometres(KM): ")
);

const time = parseInt(
  prompt("Please enter the time you want cover it within: ")
);

const speedNeeded = distance / time;

console.log(
  `You need to travel at ${speedNeeded} KM per hour to cover the distance.`
);

//A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive.

const flashMemory = parseInt(
  prompt("Please enter the flash drive memory in GB: ")
);

const totalMemory = flashMemory * 1024;

const fileSize = 820;

const numberOfFiles = Math.floor(totalMemory / fileSize);

console.log(`You can store ${numberOfFiles} files in the flash drive memory`);

//A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left.

const money = parseInt(
  prompt("Please enter the amount of money in your wallet: ")
);
const chocolatePrice = parseInt(
  prompt("Please enter the price of one chocolate bar.")
);

const numberOfChocolate = Math.floor(money / chocolatePrice);

console.log(`You can buy ${numberOfChocolate} with ${money}.`);

// The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest

const capital = parseInt(
  prompt("Please enter the sum of bank deposits for 2 months: ")
);
const interest = 0.05;

const monthlyInterest = interest / 12;

const principleInterestAmount = Math.floor(capital * monthlyInterest * 2);

console.log(`The sum of interest for 2 months is ${principleInterestAmount}`);
