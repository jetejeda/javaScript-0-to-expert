let js = "hey!";
console.log(40 + 8 - 20);
let country = "Guatemala, ";//single line comment
let continent = "America, ";
let population = "14M";
console.log(continent, country, population);
console.log(typeof population);
console.log(typeof true);

//testing the dynamic typing
population = 14;
console.log(population);
console.log(typeof population);

//Undefined variable
let year;
console.log(year);
console.log(typeof year);

//null error that has never been corrected for legacy reasons
console.log(typeof null);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

//string templates
const firstName = "Jose";
const job = "Data Engineer";
const birthYear = 1999;
const currentYear = 2024

//Traditional approach 
const introduceYourself = "I'm " + firstName + ', a ' + (currentYear - birthYear) + " years old " + job + "!";
//Template literals
const newIntroduction = `I'm ${firstName}, a ${(currentYear - birthYear)} years old ${job}!`;
console.log(newIntroduction)
//Muli-line strings before and after:
const TraditionalMultiLine = "traditional string with \n\
new line"
const es6MultiLine = `New ES6 string 
with new line`
console.log(TraditionalMultiLine)
console.log(es6MultiLine)

const age = 16;
//Shortcut to access emojis in windows: windows key + .
if (age >= 18) {
    console.log("Jose can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Jose is too young. Wait another ${yearsLeft} years 😊`);
}
/*
 multi line comments
 for many lines
 */