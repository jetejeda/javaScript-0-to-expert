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

//Working with arrays
const firstArray = ["val1", "val2", "val3"];
console.log(firstArray);
firstArray[1] = "my new values"
console.log(firstArray);
// Array basic Operations
// Add elements
const newLength = firstArray.push("val4");
console.log(firstArray);
console.log(newLength);
firstArray.unshift("val0");
console.log(firstArray);

// Remove elements
const poppedElement = firstArray.pop();
console.log(firstArray);
console.log(poppedElement);
firstArray.shift();
console.log(firstArray);
// Lookup elements
console.log(firstArray.indexOf("val1"));
console.log(firstArray.includes("val1"));
console.log(firstArray.includes("val2"));

// Objects
const myInformation = {
    firstName: "Jose",
    lastName: "Tejeda",
    birthYear: 1999,
    job: 'Data engineer',
    hasDriversLicense: true,
    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    }
}
console.log(myInformation);
myInformation["newProperty"] = "I'm brand new";
myInformation.anotherProperty = "I was added using the dot notation!";
console.log(myInformation);
//
console.log(`${myInformation["name"]} has ${myInformation.age} and it's a ${myInformation["job"]}`);

myInformation["calcAge"] = function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
}

console.log(myInformation["calcAge"]());
console.log(myInformation.age);
console.log(myInformation.getSummary());