// Functions

function addNumbers(x, y, z) {
    return x+y+z;
}

console.log("The sum of 1, 2, 3 is:", addNumbers(1,2,3));

const hello = () => {
    console.log("Hello");
}

hello();

const sum = (p,q) => {
    return p+q;
}

console.log("The sum of 10 and 5 is", sum(10,5));
