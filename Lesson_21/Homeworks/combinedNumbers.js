/*Write a function that takes three separate digits and converts them into one number. For example: the digits 1, 4, 9 will be converted to the number 149. */

function combinedNumbers(numA, numB, numC) {
    let newNumber;

    let firstNumber = numA.toString();
    let secondNumber = numB.toString();
    let thirdNumber = numC.toString();

    newNumber = firstNumber + secondNumber + thirdNumber;

    return `The new number is ${newNumber}.`;

}


console.log(combinedNumbers(1, 4, 9));