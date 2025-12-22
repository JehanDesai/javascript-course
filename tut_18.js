const prompt = require("prompt-sync")();

let arr = [1, 2, 3, 4];

//1. Push a user input number in the array
// let n = prompt("Enter a number to push to the array: ");
// n = Number.parseInt(n);
// arr.push(n);

//2. Push numbers to the array until 0 is entered.
// while(true){
//     let n = prompt("Enter a number: ");
//     n = Number.parseInt(n);
//     if(n === 0) {
//         break;
//     } else {
//         arr.push(n);
//     }
// }

//3. Filter for numbers divisible by 10
// let a = arr.filter((value) => {
//     return value % 10 == 0;
// })
// console.log(a);

//4. Return a array of squares of the given values in the array
// let a = arr.map((value) => {
//     return value*value;
// })
// console.log(a);

//5. Use reduce method to find the factorial of the first n natural numbers given in the list.
let fact = arr.reduce((v1, v2) => {
    return v1*v2;
})
console.log(fact);
