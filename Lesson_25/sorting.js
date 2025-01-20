const dataTable = [{
    name: "Johhny",
    age: 21,
    country: "UK",
    score: 55
}, {
    name: "Robert",
    age: 31,
    country: "Portugal",
    score: 92
}, {
    name: "Kentaro",
    age: 23,
    country: "Japan",
    score: 88
}, {
    name: "Becky",
    age: 28,
    country: "Australia",
    score: 76
}, {
    name: "Eva",
    age: 22,
    country: "Germany",
    score: 90
}];

//Filling the tables with the data above

const tableBody = document.querySelector('#sortableTables tbody');

function createTableCell(content) {
    const cell = document.createElement('td');
    cell.textContent = content;
    return cell;
}

function fillingTable(data) {
    tableBody.textContent = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        const cells = [
            createTableCell(row.name),
            createTableCell(row.age),
            createTableCell(row.country),
            createTableCell(row.score)
        ];

        cells.forEach(cell => tr.appendChild(cell));
        tableBody.appendChild(tr);
    });
}

fillingTable(dataTable);

// Sorting the tables

const table = document.querySelector('#sortableTables');

table.querySelectorAll('th').forEach((header, columnIndex) => {

    let isAscending = true;

    header.addEventListener('click', () => {

        const dataType = header.dataset.type;

        // Sorting the datas

        dataTable.sort((a, b) => {
            const aValue = Object.values(a)[columnIndex];
            const bValue = Object.values(b)[columnIndex];

            if (dataType === 'number') {
                return isAscending ? aValue - bValue : bValue - aValue;
            } else {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            }
        });


        fillingTable(dataTable);

        //Making sure that sort works both ways

        isAscending = !isAscending;

        // Sorting the datas directions

        table.querySelectorAll('th').forEach(th => th.classList.remove('ascending', 'descending'));
        header.classList.add(isAscending ? 'ascending' : 'descending');
    });

    if (isAscending) {
        header.classList.add('ascending');
    } else {
        header.classList.add('descending')
    }
});