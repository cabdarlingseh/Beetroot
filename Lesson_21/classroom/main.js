//Integral numbers

function isSquare(number) {
    if (number < 0) {
        return false;
    }

    if (number === 0 || number === 1) {
        return true;
    }

    const theSquareRoot = Math.sqrt(number);

    return Number.isInteger(theSquareRoot);
}


console.log(isSquare(16));
console.log(isSquare(14));
console.log(isSquare(144));
console.log(isSquare(149));