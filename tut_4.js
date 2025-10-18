// Primitive and Objects datatypes in JavaScript

/*
    Primitive datatypes are those datatypes that are fundamental and are built-in. There are 7 types of primitive datatypes in JS
    1. Null
    2. Number
    3. Symbol
    4. String
    5. Boolean
    6. Bigint
    7. Undefined

    Objects are key value pairs. The key can be a string or a number and the value can be any datatype.
*/

let a = null;
let b = 55;
let c = Symbol("Hi I am Jehan");
let d = "Hello world";
let e = true;
let f = BigInt(564);
let g = undefined;

console.log(a, b, c, d, e, f, g)
console.log(typeof c)

//Objects 
const items = {
    "jehan": 100,
    "ahana": undefined
}

let temp = {
    54 : "hello"
}

console.log(items["jehan"])
console.log(items["desai"]) //undefined since does not exist in object
console.log(temp[54])
console.log(temp[50]) //undefined since does not exist in object