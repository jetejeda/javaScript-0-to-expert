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

//THE this KEYWORD Examples

function sayHi(name) {
  console.log(`Hi ${name} nice to meet you!`);
  //Since we're using strict mode it should be undefined
  console.log(this);
}

sayHi("Jose");

const sayHiArrow = (name) => {
  console.log(`Hi ${name} nice to meet you!`);
  //It will inherit the this value from the surrounding function
  //In this case it should be the Window object
  console.log(this);
};

sayHiArrow("Jose");

const jose = {
  name: "Jose",
  sayHi: function () {
    console.log(`Hi ${this.name} nice to meet you!`);
    //Always remember that it will assume the value of the object which called it
    //Not te value from the object in which it was defined
    //As shown the juan object
    console.log(this);
  },
};

jose.sayHi();

//Since we are using var, it will create a property in the window Object
var name = "global";
const juan = {
  name: "Juan",
  birthYear: 1999,
  //Since it will inherit it from the Window object
  //it will take the value of name in the Window object
  //Even though the juan object has its own name property
  greet: () => console.log(`Hey ${this.name}`),

  calcAge: function () {
    console.log(new Date().getFullYear() - this.birthYear);

    const isMillennial = function () {
      //Even if its executed due to the method call
      //it will be undefined since its just a function call
      console.log(this);
    };
    isMillennial();
  },
};

juan.referenceFunction = jose.sayHi;
juan.referenceFunction();
juan.greet();
juan.calcAge();

//THE ARGUMENTS OBJECT
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 6, 8, 9);
