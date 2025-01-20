const resizable = document.querySelector('.resizable');
const resize = document.querySelector('.resize');


let isResizing = false;

resize.addEventListener('mousedown', (event) => {
    event.preventDefault();
    isResizing = true;
    resizable.classList.add('resizing');
});

window.addEventListener('mousemove', (event) => {
    if (!isResizing) return;

    const changes = resizable.getBoundingClientRect();

    const newWidth = event.clientX - changes.left;
    const newHeight = event.clientY - changes.top;

    resizable.style.width = `${newWidth}px`;
    resizable.style.height = `${newHeight}px`;
});

window.addEventListener('mouseup', () => {
    isResizing = false;
    resizable.classList.remove('resizing');
});