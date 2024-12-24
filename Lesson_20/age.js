//Ask the user for their age and determine whether they are a child (0-11), teenager (12-17), adult (18_59), or pensioner (60...), and allow for the possibility of entering incorrect data.

let age = prompt("Enter your age: ");
age = parseInt(age);
if (age >= 0 && age <= 11) {
    alert("You are a child.");
} else if (age >= 12 && age <= 17) {
    alert("You are a teenager.");
} else if (age >= 18 && age <= 59) {
    alert("You are an adult.");
} else if (age >= 60 && age <= 120) {
    alert("You are a pensioner.");
} else if (age > 120) {
    alert("Vampire detected.");
} else {
    alert("Incorrect data.");
};