// Guess the number game
const prompt = require('prompt-sync')();
let randomNumber = Math.floor(Math.random()*100)+1;
let currentChance = 0;
let userNumber = 0;

while (userNumber !== randomNumber) {
    userNumber = Number.parseInt(prompt('Guess the number: '));
    if (userNumber === randomNumber) {
        break;
    } else if (userNumber > randomNumber) {
        console.log('The number you have entered is greater than the answer!');
    } else {
        console.log('The number you have entered is smaller than the answer!');
    }
    currentChance++;
}

console.log(`You've guessed the correct number. Your score is: ${100-currentChance}`);