//Game “Guess the number”. Ask the user to guess a number from 0 to 100 and guess it in the following way: each iteration of the loop, divide the range of numbers in half, write the result in N and ask the user “Is your number > N, <N or == N?”. Depending on what the user says, reduce the range. The initial range is from 0 to 100, divide it in half and get 50. If the user has indicated that their number is > 50, then change the range to 50 to 100. And so on until the user selects == N (it will be useful to read about the algorithm: “binary search”).

let startingNumber = 0;
let endNumber = 100;
let guess;
let response;

while (startingNumber <= endNumber) {
    guess = Math.floor((startingNumber + endNumber) / 2);

    response = prompt(`Is your number > ${guess}, < ${guess} or == ${guess}`);

    if (response === '==') {
        alert(`This is your number ${guess}`);
        break;
    } else if (response === '>') {
        startingNumber = guess + 1;
    } else if (response === '<') {
        endNumber = guess - 1;
    } else {
        alert(`Please select '>', '<' or '==' only.`);
    }
}

if (startingNumber > endNumber) {
    alert("It seems there was a misunderstanding. Let's try again!");
}