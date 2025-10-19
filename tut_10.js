// While loops

const prompt = require("prompt-sync")();
let n = prompt("Enter a number to print its factorial: ");
n = Number.parseInt(n);

// While loop
let answer1 = 1;
let answer2 = 1;

let i = n;
while (i > 1) {
    answer1 *= i;
    i--;
}
console.log("The factorial is", answer1);

i = n;
do {
    answer2 *= i;
    i--;
} while (i > 1)
console.log("The factorial is", answer2);
