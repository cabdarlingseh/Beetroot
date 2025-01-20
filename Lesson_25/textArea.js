const displayedText = document.querySelector('.displayed_text p');
const editedText = document.querySelector('#edited_text');

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.key === 'e' || event.key === 'E')) {
        event.preventDefault();
        editing();
    } else if (event.ctrlKey && (event.key === 's' || event.key === 'S')) {
        event.preventDefault();
        saving();
    }
})


function editing() {
    if (editedText.style.display === 'none' ||
        editedText.style.display === '') {
        editedText.style.display = 'block';
        displayedText.style.display = 'none';
        editedText.value = displayedText.textContent;
        editedText.focus();
    }
}

function saving() {
    displayedText.textContent = editedText.value;
    editedText.style.display = 'none';
    displayedText.style.display = 'block';
}