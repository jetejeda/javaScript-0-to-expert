"use strict";
/**
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/
const calcAverage = (firstScore, secondScore, thirdScore) =>
  (firstScore + secondScore + thirdScore) / 3;
let scoreDolphins = calcAverage(43, 23, 71);
let scoreKoalas = calcAverage(85, 54, 41);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins / avgKoalas >= 2) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas / avgDolphins >= 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return "No team wins...";
  }
};

console.log(checkWinner(scoreDolphins, scoreKoalas));
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
/**
 
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
};
console.log(calcTip(100));

let bills = [125, 555, 44];
let tips = [];

bills.forEach((element) => {
  tips.push(calcTip(element));
});
console.log(tips);

let totals = [];
for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}
console.log(totals);

/**
 CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall. */
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `Mark Miller's BMI (${mark.bmi}) is higher than John Smith's (${john["bmi"]})!`
  );
} else {
  console.log(
    `John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark["bmi"]})!`
  );
}

/*
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

for (let i = 0; i < bills.length; i++) {
  const currentTip = calcTip(bills[i]);
  tips.push(currentTip);
  totals.push(bills[i] + currentTip);
}

const average = function (arr) {
  const sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(bills, tips, totals);
console.log(`The average total for all the bills is: ${average(totals)}.`);

/*
PROBLEM 1:
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

*/
//First approach
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
let minTemperature = temperatures[0];
let maxTemperature = temperatures[0];

for (let i = 1; i < temperatures.length; i++) {
  const element = temperatures[i];
  if (Number(element)) {
    minTemperature = minTemperature > element ? element : minTemperature;
    maxTemperature = maxTemperature < element ? element : maxTemperature;
  }
}
console.log(
  `The min temperature given is: ${minTemperature} and the max temperature given is: ${maxTemperature}.
  The temperature amplitude for this array is ${
    maxTemperature - minTemperature
  }`
);

// Alternative
let alternativeAnswer = temperatures
  .filter((a) => typeof a === "number")
  .sort((a, b) => {
    return a - b;
  });
console.log(alternativeAnswer);
console.log(
  `The min temperature given is: ${
    alternativeAnswer[0]
  } and the max temperature given is: ${
    alternativeAnswer[alternativeAnswer.length - 1]
  }
  The temperature amplitude for this array is ${
    alternativeAnswer[alternativeAnswer.length - 1] - alternativeAnswer[0]
  }`
);

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
const printForecast = function (arr) {
  let forecast = "...";
  for (let i = 0; i < arr.length; i++) {
    forecast += ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  return forecast;
};
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
