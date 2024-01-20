function convertNumberToString() {}

function convertStringToNumber(string) {}

// Sample usage - do not modify
// console.log(convertNumberToString(42)); // "42"
// console.log(convertNumberToString(97)); // "97"
// console.log(convertNumberToString(11)); // "11"

// console.log(convertStringToNumber("42")); // 42
// console.log(convertStringToNumber("97")); // 97
// console.log(convertStringToNumber("11")); // 11

let age = 25;
let stringAge = age.toString();

console.log(stringAge);
console.log(typeof stringAge);

let name = 70;
let numberName = Number.parseInt(name);

console.log(numberName);
console.log(typeof stringAge);

let card = 555;
let conNumber = card.toString();

console.log(conNumber);
console.log(typeof conNumber);

let box = "989";
let conString = Number.parseInt(box);

console.log(conString);
console.log(typeof conString);
