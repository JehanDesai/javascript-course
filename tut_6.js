// Expressions and Conditionals

let a = 45;
let b = 4;

//Arithematic operators
console.log("a+b =", a+b);
console.log("a-b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);
console.log("a**b =", a**b);
console.log("a%b =", a%b);


// Incremental operators
console.log("a++ =", a++);
console.log(a)
console.log("++a =", ++a);

console.log(a)
console.log("a-- =", a--);
console.log(a)
console.log("--a =", --a);
console.log(a)


console.log("a%b =", a%b);


// Assignment operators
a += 5;
a -= 5;
a /= 5;
a *= 5;
a %= 5;
a **= 5;


//Comparison operators
let c = 12;
let d = "12"; //Javascript takes the value of string also as numbers but keeps them as string. This comparison can only be differentiated by === operator which checks for both the value and type of the variables value
let e = 12;

console.log("==", c == d);
console.log("==",c == e);
console.log("!=",c != d);
console.log("===",c === d);
console.log("===",c === e);
console.log("!==",c !== d);
console.log("!==",c !== e);
console.log(">",c > d);
console.log("<",c < d);
console.log(">=",c >= d);
console.log("<=",c <= d);

console.log(c === d ? true:false);


//logical operators
let flag1 = true;
let flag2 = false;

console.log("&&", flag1 && flag2);
console.log("||", flag1 || flag2);
console.log("!", !flag2);

