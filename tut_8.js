const prompt = require("prompt-sync")();

//1. Use logical operators to find out the age of the person is between 10 and 20
let age = prompt("What is your age ");
age = Number.parseInt(age);
if (age <= 20 && age >= 10) {
    console.log("Yes the age is between 10 and 20");
} else {
    console.log("No the age is not between 10 and 20");
}

//2. Demonstrate the use of switch case

switch(age) {
    case 10:
        console.log("10");
        break;
    default:
        console.log("Not 10");
}

//3. Write a script to check if the number is divisible by 2 and 3
let number = prompt("Enter a number to check if it is divisible by 2 and 3: ");
number = Number.parseInt(number);

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Yes the number is divisible by both 2 and 3");
} else {
    console.log("No the number is not divisible by both 2 and 3");
}

//4. Write a script to check if the number is divisible by 2 or 3
let number2 = prompt("Enter a number to check if it is divisible by 2 or 3: ");
number2 = Number.parseInt(number2);

if (number2 % 2 === 0 || number2 % 3 === 0) {
    console.log("The number is divisible by 2 or 3");
} else {
    console.log("The number is not divisible by 2 or 3");
}

