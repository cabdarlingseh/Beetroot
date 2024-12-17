//Request a three-digit number from a user and check whether it has identical digits.

document.getElementById('checkButton').addEventListener('click', () => {
    const input = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');

    if (input && input.length === 3 && !isNaN(input)) {
        let digits = input.split('');
        if (digits[0] === digits[1] && digits[1] === digits[2]) {
            resultElement.textContent = 'All the digits are identical';
            resultElement.className = 'success';
        } else {
            resultElement.textContent = 'The digits are not identical';
            resultElement.className = 'error';
        }
    } else {
        resultElement.textContent = 'Invalid input. Please enter a three digit number.';
        resultElement.className = 'error';
    }
});

//Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD, etc.) and gets the result.

const rates = {
    EUR: 0.85,
    SEK: 10.5,
    JPY: 110.45
};

document.getElementById('convert').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    const convertedAmount = document.getElementById('result2');


    if (amount && amount > 0) {
        const process = amount * rates[currency];
        convertedAmount.textContent = `The amount of ${amount} USD is ${process} ${currency}.`;
    } else {
        convertedAmount.textContent = 'Please enter a valid amount in USD.';
    }
})

//Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, a new year, and also leap years.

document.getElementById('calculateButton').addEventListener('click', () => {
    const input = document.getElementById('dateInput').value;
    let [day, month, year] = input.split(':').map(Number);
    const nextDate = document.getElementById('result3');


    //Validation
    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12) {
        nextDate.textContent = 'Invalid Date. Please enter a valid date in the provided format';
        return;
    }

    const leapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    const monthDays = [31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    day += 1;

    if (day > monthDays[month - 1]) {
        day = 1;
        month += 1;

        if (month > 12) {
            month = 1;
            year += 1;
        }
    };

    let answer = (day < 10 ? '0' + day : day) + ':' + (month < 10 ? '0' + month : month) + ':' + (year < 10 ? '0' + year : year);

    nextDate.textContent = `The next date is ${answer}`;
});