// // Map, Filter and Reduce

// let arr = [1,2,3,4,5,6];


// /* 
// Map and forEach are pretty much the same since they both iterate over an object BUT
// Map returns a new array and forEach does not. It simply just iterates over the array.
// */
// arr.map((value) =>{
//     console.log(value);
// })

// arr.forEach(function(value, index) {
//     console.log(`index ${index} has value ${value}`)
// })

// arr.forEach((value, index)=> {
//     console.log(`Index ${index} has value ${value}`)
// })

// /*
// The Filter method in the array returns a new array with values that obey certain conditions.
// */

// let arr2 = [10,20,30,4,5,2,8]
// let a = arr2.filter((value)=> {
//     return value < 10;
// })

// console.log(a)

// /*
// Reduce method reduces an array to a single value. It returns a single value
// */

let arr3 = [1,2,3,4,5];
let n = arr3.reduce((h1, h2) => {
    return h1+h2;
})

console.log(n);

