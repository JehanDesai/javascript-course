// DOM BOM and Window

/*
    Window -> This is a global object. This is the parent of DOM, BOM and core javascript.
    DOM -> This is the JavaScript api that represents the HMTL web structure as a tree of objects for manipulation (document.getElementById)
    BOM -> This is the JavaScript api that interacts with the browser window and it's components. (window.alert, window.prompt, window.cornfirm)
*/

//Question 1 -> Using prompt enter the user's age and let them know if they can drive

// alert("Check if you can drive!");
// let age1 = prompt('Write your age');
// age1 = Number.parseInt(age1);

// if (age1 >= 18) {
//     alert("You can drive!");
// } else {
//     alert("You cannot drive!");
// }


//Question 2 -> Use confirm if the user wants to see the prompt again.

// let runAgain = true;
// while (runAgain){
//     alert("Check if you can drive!");
//     let age2 = prompt('Write your age');
//     age2 = Number.parseInt(age2);
    
//     if (age2 >= 18) {
//         alert("You can drive!");
//     } else {
//         alert("You cannot drive!");
//     }
//     runAgain = confirm("You want to run this again?");
// }
// alert('Thank you')

//Question 3 -> Use console.error to log error if the age entered is negative

// let runAgain = true;
// while (runAgain){
//     alert("Check if you can drive!");
//     let age3 = prompt('Write your age');
//     age3 = Number.parseInt(age3);
    
//     if (age3 >= 18) {
//         alert("You can drive!");
//     } else if (age3 < 0) {
//         console.error("The age you've entered is negative!");
//     }
//      else {
//         alert("You cannot drive!");
//     }
//     runAgain = confirm("You want to run this again?");
// }
// alert('Thank you')


//Question 4 -> If the user enters a value less than 4 then redirect the page to google.com
// let number = prompt('Enter a number');

// if (number < 4) {
//     location.href = "https://www.google.com/";
// } else {
//     alert("Thank you!");
// }

//Question 5 -> Change the background color to what the user prompts
let color = prompt('Enter the color of the background');
document.body.style.background = color;