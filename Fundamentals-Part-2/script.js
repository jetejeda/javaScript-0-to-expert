"use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //Should be hasDriversLicense (missing an s)
if (hasDriversLicense) console.log("I can drive :)");
// const interface = "This should fail thanks to the strict mode";

// Functions
function logger() {
    console.log("This was executed inside a function!");
}
// call/invoke the function
logger();

// Calling a declaration function before it's definition
let earlyJuice = fruitProcessor(13, 4);
console.log(earlyJuice);

// Functions with parameters
function fruitProcessor(apples, oranges) {
    console.log(`I will be processing ${apples} apples and ${oranges} oranges in this function`);
    return `Here is your juice composed of ${apples} apples and ${oranges} oranges!`
}
// Passing the arguments to the function
let getJuice = fruitProcessor(3, 2);
console.log(getJuice);

let getMoreJuice = fruitProcessor(5, 8);
console.log(getMoreJuice);

// Using expressions
const getAge = function (birthYear) {
    return new Date().getFullYear() - birthYear
}

console.log(getAge(1999))

// Arrow functions
const ageAsArrowFunction = birthYear => new Date().getFullYear() - birthYear;
const myAge = ageAsArrowFunction(1999);
console.log(myAge);

const complexArrowFunction = (birthYear, firstName) => {
    const age = new Date().getFullYear() - birthYear;
    return `Hey ${firstName}, you are ${age} years old.`
}
const sayMyAge = complexArrowFunction(1999, "Jose")
console.log(sayMyAge);

// Functions calling other functions
const cutPieces = fruit => fruit * 4;
const prepareJuice = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    return `I have prepared a juice composed of ${applePieces} apple pieces and ${orangePieces} orange pieces`;
}
console.log(prepareJuice(2, 3));
