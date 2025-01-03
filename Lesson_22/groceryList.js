/* The Grocery List

Create the Array:
Start with an array named groceriesList.
Each item is an object with properties:
name (string)
amount (number)
bought (boolean, false initially)
Add a few sample items to your list.
Functions:
displayGroceries():
Prints the list to the console.
Challenge: Sort so unbought items appear first.
addItem(name, amount):
Adds a new item or increases the quantity if it already exists.
purchaseItem(name):
Marks an item as bought. */

const groceriesList = [{
        productName: 'onion',
        amount: 10,
        isBought: false
    },
    {
        productName: 'tomato',
        amount: 15,
        isBought: true
    },
    {
        productName: 'eggs',
        amount: 7,
        isBought: false
    },
    {
        productName: 'potato',
        amount: 6,
        isBought: true
    },
    {
        productName: 'meat',
        amount: 3,
        isBought: false
    },
];

function displayGroceries() {
    const sortedList = groceriesList.sort((a, b) => a.isBought - b.isBought);

    console.log('Grocery List: ');

    sortedList.forEach((item) => {
        const boughtStatus = item.isBought ? 'Bought' : 'Not Bought';
        console.log(`${item.productName} - Amount Bought: ${item.amount} - Status: ${boughtStatus}`);
    });
}

displayGroceries();


function addItem(name, amount) {
    const listedItem = groceriesList.find((item) => item.productName === name);

    if (listedItem) {
        listedItem.amount += amount;
        console.log(`${amount} of ${name} have been added. New amount is ${listedItem.amount}`);
    } else {
        groceriesList.push({
            productName: name,
            amount: amount,
            isBought: false
        });
        console.log(`Added ${name} to the list.`);
    }
}

let itemName = prompt('Enter the item name: ').toLowerCase();
let itemAmount;
while (true) {
    itemAmount = Number(prompt('Enter the item amount'));

    if (itemAmount > 0) {
        break;
    } else {
        alert('Please enter a valid number for the amount.')
    }
}

addItem(itemName, itemAmount);
displayGroceries();

function purchaseItem(name) {
    const item = groceriesList.find((item) => item.productName === name);

    if (!item) {
        console.log(`${name} not found on the groceries list`)
    } else if (item.isBought) {
        console.log(`${name} has been bought.`)
    } else {
        console.log(`${name} has not been bought.`);
    };
};

let boughtItem = prompt('Enter the item name: ').toLowerCase();


purchaseItem(boughtItem);