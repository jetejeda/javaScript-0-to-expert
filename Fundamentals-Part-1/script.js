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

//Type conversion:
console.log(Number("1999"), "1999");
console.log(Number("creating the Nan error"));
console.log(typeof NaN);
console.log(String(23), 23)

//Type coercion
console.log("I am" + 24 + "years old");
console.log("I am" + "24" + "years old");

//Type coercion also depends on the operators that we're using:
console.log("24" + "10" + 4);
console.log("24" - "10" - 4);
console.log("24" + "10" - 4);
console.log("24" * "2");
console.log("24" / "2");

//Creating Falsy values:
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));

//Creating Truthy values:
console.log(Boolean(24));
console.log(Boolean("anything but empty"));
console.log(Boolean({}));

//Equality operators:
console.log(`Loose equal operator: "18" == 18: `, "18" == 18)
console.log('Strict equal operator: "18" === 18: ', "18" === 18)

//Alternative to retrieve data from the user
const myData = prompt("What's your favorite number?")
console.log(myData)

// Logical operators
const hasDriversLicense = false;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense && hasGoodVision);
/*
 multi line comments
 for many lines
 */