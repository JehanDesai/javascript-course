// This is the practice set

//1. Create a variable of type string and add a number to it.

let a = "Jehan";
a += 6;

console.log(a)

//2. Use typeof operator to find the datatype of the variable created in the last question.
console.log(typeof a)

//3. Create a const object in javascript. Can we change it to hold a number later.
//Answer is no

const obj = {
    name: "Jehan"
}

//We can change the values inside the const objects but we cannot redeclare the variable .
console.log(obj["name"])
obj["name"] = "Desai"
console.log(obj["name"])

// obj = 10; //This is not allowed
// console.log(obj)

//4. Try to add a new key to the const object, were we able to do it?
obj["section"] = "A";
console.log(obj) // We are able to add a new key to the const object.

//5. write a JS program to create a word meaning dictionary of 5 words.
let dictionary = {
    word1: "meaning1",
    word1: "meaning1",
    word1: "meaning1",
    word1: "meaning1",
    word1: "meaning1",
}



