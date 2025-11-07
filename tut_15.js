let temp = "har\"";
console.log(temp.length)

console.log("Jehan".includes("Je"))
console.log("Jehan".startsWith("Je"))
console.log("Jehan".endsWith("Je"))

function convertToLowercaseString(x) {
    return x.toLowerCase();
}

let name = "Jehan";

console.log(convertToLowercaseString(name))

let sentence = "Please give Rs. 1000";
console.log(sentence.slice(16))

temp = "Jeham";
temp[4] = "n";
console.log(temp)