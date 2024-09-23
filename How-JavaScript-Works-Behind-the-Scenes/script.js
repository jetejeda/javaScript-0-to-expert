"use strict";

let firstName = "Jose";
function calcAge(birthYear) {
  console.log(firstName);
  const age = new Date().getFullYear() - birthYear;

  function printAge() {
    // Creating NEW variable with the same name as outer scope's variable
    const firstName = "Juan";
    let output = `Hi ${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      //Prove that functions are scope block elements when using strict mode
      function addNumbers(a, b) {
        return a + b;
      }
      console.log(addNumbers(5, 3));
      output = "UPDATED THE OUTPUT AT THE INNER IF SCOPE";
    }
    console.log(output);
    // Prove that variables defined with var are function scoped
    console.log(millennial);
    //const variables are block scope, if uncommented this line will cause an error
    //console.log(str);
    //Functions are block scoped, this will cause an error if uncommented
    //console.log(addNumbers(6, 3));
  }

  printAge();
  return age;
}

console.log(calcAge(1991));
