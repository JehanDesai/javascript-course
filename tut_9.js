// For Loops
const prompt = require("prompt-sync")();

let number = prompt("Enter a number: ");
number = Number.parseInt(number);

//1. For loop
let sum = 0;
for (let i = 0; i < number; i++) {
    sum += (i+1)
}
console.log("Sum of first", number, "natural numbers is: ", sum);

//2. For in loop
let obj = {
    "jehan" : 95,
    "ahana" : 90
}

for (let o in obj) {
    console.log("The marks of", o, "are", obj[o]);
}

//3. For of loop
for (let a in "harry") {
    console.log(a);
}