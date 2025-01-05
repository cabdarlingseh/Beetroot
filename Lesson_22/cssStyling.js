/*Create the Array:
Name it cssStyles.
Each item is an object with:
styleName (e.g., "color", "fontSize")
styleValue (e.g., "blue", "16px")
Function:
applyStyles(text, stylesArray):
Takes a string of text and the cssStyles array.
Creates a <p> element with the text and the styles applied.
Uses document.write() to add it to the page. */


const cssStyles = [{
        styleName: 'fontWeight',
        styleValue: 'bold'
    },
    {
        styleName: 'color',
        styleValue: 'red'
    },
    {
        styleName: 'textAlign',
        styleValue: 'center'
    },
    {
        styleName: 'fontSize',
        styleValue: '16px'
    },
    {
        styleName: 'backgroundColor',
        styleValue: '#c6b7b8'
    }
];

function applyStyles(text, stylesArray) {
    const paragrapgh = document.createElement('p');

    paragrapgh.textContent = text;

    stylesArray.forEach((style) => {
        paragrapgh.style[style.styleName] = style.styleValue;
    });

    document.write(paragrapgh.outerHTML);
}

let text = prompt('Enter any text: ');

applyStyles(text, cssStyles);