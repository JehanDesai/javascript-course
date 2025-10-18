// Var vs Let vs Const


/*
Var is defined and can be changed globally but let and const are block speicific. If value changed inside the block then the value
changes specific to the block only. Outside the value returns to the global one itself.
*/

var a = 6;
console.log(a)
{
    a = 10;
}
console.log(a)

let b = 10;
// let b = 4; //This will introduce an error because we can redeclare a var variable but not a let variable. 
// b = "hey"; //This is allowed
{
    let b = 100;
    console.log(b)
}
console.log(b)



const author = "Jehan";

console.log(author)
// author = "Desai" //This will introduce an error. We CANNOT change the values of const

// let author = 10; //This will also throw an error. We CANNOT redeclare another variable with the same name if initially declared as const.
