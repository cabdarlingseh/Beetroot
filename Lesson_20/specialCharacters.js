// Ask the user for a number from 0 to 9 and display the special character that is located on this key (1 !, 2 @, 3 #, etc.).

let number = prompt("Enter a number from 0 to 9: ");
number = parseInt(number);
switch (number) {
    case 0:
        alert(')');
        break;
    case 1:
        alert('!');
        break;
    case 2:
        alert('@');
        break;
    case 3:
        alert('#');
        break;
    case 4:
        alert('$');
        break;
    case 5:
        alert('%');
        break;
    case 6:
        alert('^');
        break;
    case 7:
        alert('&');
        break;
    case 8:
        alert('*');
        break;
    case 9:
        alert('(');
        break;
    default:
        alert('Incorrect Number');
        break;
}