// Conditional statements
let age = 18;

if (age > 18) {
    console.log("You can drive!");
} else if (age === 18){
    console.log("You can start to learn how to drive!");
} else {
    console.log("You cannot drive!");
}

if (age < 18) {
    console.log("You cannot drive!");
} else {
    if (age == 18) {
        console.log("You can start to learn how to drive!");
    } else {
        console.log("You can drive");
    }
}