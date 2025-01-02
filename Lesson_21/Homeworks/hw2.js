/*Write a function that takes 2 numbers and returns :

-1,
if the first number is less than the second;

1 -
    if the first number is greater than the second;
    
0 -
    if the numbers are equal.*/

function twoNumbers(numA, numB) {
    if (numA < numB) {
        return -1;
    } else if (numA > numB) {
        return 1;
    } else {
        return 0;
    }

}


console.log(twoNumbers(2, 2));