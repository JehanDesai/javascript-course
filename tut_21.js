// Alert, Prompt and confirm

alert("Enter a number");
let a = prompt("Enter the number");
a = Number.parseInt(a);
alert("You've entered value of type " + typeof a);
let write = confirm("Do you want to write this value?");
if (write) {
    document.write(a);
} else {
    document.write("You did not give me permission to write the value!");
}
