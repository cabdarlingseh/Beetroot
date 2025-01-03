/* Part 2: The Shopping Receipt

Create the Array:
Name it shoppingReceipt.
Each item is an object with:
name (string)
amount (number)
pricePerItem (number)
Functions:
printReceipt():
Nicely formats and prints the receipt to the console.
calculateTotal():
Returns the total cost of the purchase.
findMostExpensiveItem():
Returns the object representing the most expensive item.
calculateAveragePrice():
Returns the average price per item on the receipt.*/

const shoppingReceipt = [{
        productName: 'watch',
        amount: 5,
        pricePerItem: 5000
    },
    {
        productName: 'smartphones',
        amount: 2,
        pricePerItem: 1200
    },
    {
        productName: 'playstation',
        amount: 10,
        pricePerItem: 500
    },
    {
        productName: 'laptop',
        amount: 20,
        pricePerItem: 1300
    },
    {
        productName: 'television',
        amount: 5,
        pricePerItem: 1500
    },
];

function printReceipt() {
    // const sortingProducts = shoppingReceipt.sort((a, b) => a.productName - b.productName);

    console.log('------------------------------Shopping Receipt---------------------------');

    shoppingReceipt.forEach((item) => {

        const capitalizingProductName = item.productName.charAt(0).toUpperCase() + item.productName.slice(1).toLowerCase();

        const totalCost = item.amount * item.pricePerItem;
        console.log(`${capitalizingProductName}  -  Amount: ${item.amount}  - Price per Unit: ${item.pricePerItem} - Total: $${totalCost.toFixed(2)}`);

        console.log('-------------------------------------------------------------------------')
    })
};


printReceipt();

function calculateTotal() {
    let totalCost = 0;

    shoppingReceipt.forEach((item) => {
        totalCost += item.amount * item.pricePerItem;

        console.log(`The total cost for ${item.productName} is $${totalCost.toFixed(2)}`);
    })

}

calculateTotal();


function findMostExpensiveItem() {
    let expensiveProduct = '';
    let maxPrice = 0;

    shoppingReceipt.forEach((item) => {
        const totalCost = item.amount * item.pricePerItem;

        if (totalCost > maxPrice) {
            maxPrice = totalCost;
            expensiveProduct = item.productName;
        }
    });

    console.log(`The most expensive item is ${expensiveProduct}, costing $${maxPrice.toFixed(2)}.`);
}

findMostExpensiveItem();


function calculateAveragePrice() {
    let totalCost = 0;
    let totalItems = 0;

    shoppingReceipt.forEach((item) => {
        totalCost += item.amount * item.pricePerItem;
        totalItems += item.amount;
    });

    if (totalItems === 0) {
        console.log('No items were bought');
    } else {
        const averagePrice = (totalCost / totalItems).toFixed(2);
        console.log(`The average price of the items is $${averagePrice}.`);
    };
};


calculateAveragePrice();