// Create a function that will print the number of arguments passed to it.

function printArguments() {
    numberOfArguments = arguments.length;

    console.log(`The number of arguments is ${numberOfArguments}`);
}

printArguments(1, 2, 2, 3, 3, 4)