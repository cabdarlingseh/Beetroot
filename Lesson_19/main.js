let num1 = parseFloat(prompt('Enter the first number: '));
let num2 = parseFloat(prompt('Enter the second number: '));

if (isNaN(num1) || isNaN(num2)) {
    alert('Please enter a valid number.');
} else {
    let operations;
    while (true) {
        operations = prompt('Please select one of the operations: +, -, * or /');
        if (operations === '+' || operations === '-' || operations === '*' || operations === '/') {
            break;
        } else {
            alert('Please choose a valid operation. +, -, * or /');
        }
    }

    let calculations;
    switch (operations) {
        case '+':
            calculations = num1 + num2;
            break;
        case '-':
            calculations = num1 - num2;
            break;
        case '*':
            calculations = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Divison by "0" is not possible.');
            } else {
                calculations = num1 / num2;
            }
            break;
    }

    if (calculations !== undefined) {
        alert(`The result is ${calculations}`);
    }

}