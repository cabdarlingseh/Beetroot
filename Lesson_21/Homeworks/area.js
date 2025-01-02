/*Write a function that takes the length and width of a rectangle and calculates its area. If you pass 1 parameter to the function, it calculates the area of the square */

function calculatesArea(length, width) {
    if (arguments.length === 1) {
        squareArea = length * length;

        return `The area of the square is ${squareArea}.`;
    }
    rectangleArea = length * width;

    return `The area of the rectangle is ${rectangleArea}.`;
};


console.log(calculatesArea(3));
console.log(calculatesArea(5, 2));