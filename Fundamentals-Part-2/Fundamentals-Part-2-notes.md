# Strict Mode in JavaScript

It's a special mode that we can activate in JavaScript, which makes it easier for us to write a secure JavaScript code. In order to activate it, we just have to add this string at the beginning of the file:

```js
"use strict";
```

This will activate the strict mode for the entire script. It has to be the very first statement in the script. Comments can appear before the string, but not code. We can also activate the strict mode only for a specific function or a specific block. The strict mode help us to avoid accidental errors (bugs in code). Strict mode forbids us to do certain things and will create visible errors in the developer console to us in certain situations in which without strict mode JavaScript will simply fail silently without letting us know that we did a mistake.

Here is an example of the benefits of using the strict mode, the next code will fail because I committed a typo with the hasDriversLicense variable in the if statement.

```js
"use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //Should be hasDriversLicense (missing an s)
if (hasDriversLicense) console.log("I can drive :)");
```

Let's check de developer console to see if we can gather some information about the error.

**Without strict mode:**
its not showing any error
![console without strict mode activated](/Fundamentals-Part-2/images-for-course-notes/image.png)

**strict mode activated:**
It displays the error with some information about it!
![console with strict mode activated](/Fundamentals-Part-2/images-for-course-notes/image-1.png)

Strict mode also introduce a short list of variable names that are reserved for features that might be added to the language a bit later. Here is an example using the word interface:

```js
"use strict";
const interface = "This should fail thanks to the strict mode";
```

![trying to use a future reserved word](/Fundamentals-Part-2/images-for-course-notes/image-2.png)

# Functions

A function is a piece of code that we can reuse several times in our code. It's like a variable but for whole chunks of code.
They can hold one or more complete lines of code. After we have created our function we can then execute it, in order to execute/invoke a function we just have to call it. We can call a function as many times as we want.

In functions we can pass data and additionally, a function can also return data as well. In order to send information to a function we will need parameters. Functions allow us to write more maintainable code because with functions we can create reusable chunks of code, its a very important principle for writing clean code.

The parameters are like variables that are specific only to the function and they will get defined once we call the function. They represent the input data of the function. When calling a function that has parameters, all the values that we send are called arguments. Thanks to the parameters defined in some functions, we can reuse the function with different input values (arguments) and get a different output.

If we never call a function, the code inside of it will never be executed. **Keep in mind that not all functions need to return something and not all functions need to accept parameters.**

```js
// Functions with parameters
function fruitProcessor(apples, oranges) {
  return `Here is your juice composed of ${apples} apples and ${oranges} oranges!`;
}
// Passing the arguments to the function
let getJuice = fruitProcessor(3, 2);
console.log(getJuice);
```

If we assign a function that doesn't return anything to a variable, after the execution the variable will contained undefined (produced by the function).

# Function Declarations VS. Expressions

In JavaScript there are different ways of writing functions. Each type of function works in a slightly different way.

- Function declarations: It's when we use the function keyword to declare a function plus the function name.
- Function expression/anonymous functions: Is the other type of function that exists. To create it we simply write the function keyword but without a name for the function, and include the parameters that we will need as well as the logic inside the function. Finally, we will have to store the complete function inside a variable, that variable will then be the function.

Function expressions are important because in JavaScript, functions are actually just values. Function is not a type, is a value, therefore we can store them inside variables.

## Difference between function declarations and Function expressions

The main difference is that we can actually call function declarations before they are defined in the code. We can't do this with function expressions.

### Example with function declarations

```js
// This will work as it's a function declaration
let getJuice = fruitProcessor(13, 4);
console.log(getJuice);

function fruitProcessor(apples, oranges) {
  return `Here is your juice composed of ${apples} apples and ${oranges} oranges!`;
}
```

![calling a function declaration before it's definition](/Fundamentals-Part-2/images-for-course-notes/function-declaration-example.png)

### Example with function expression

```js
// This will throw an error since we are trying to call a function expression before it's defined
let getJuice = fruitProcessor(13, 4);
console.log(getJuice);

const fruitProcessor = function (apples, oranges) {
  return `Here is your juice composed of ${apples} apples and ${oranges} oranges!`;
};
```

![calling a function expression before it's definition](/Fundamentals-Part-2/images-for-course-notes/function-expression-example.png)

# Arrow functions

It's another type of function that was added to JavaScript ES6. Is a special form of function expression that is shorter and therefore faster to write. It's easier to write since we don't need the curly braces, nor the function and return keywords.

The syntax is:
(parameters) => code;

```js
const ageAsArrowFunction = (birthYear) => new Date().getFullYear() - birthYear;
const myAge = ageAsArrowFunction(1999);
console.log(myAge);
```

It is excellent for simple one-liner functions. They can get more complex when we add more parameters or more code. If the arrow function needs more lines of code, we can use the curly braces to define the code block that corresponds to the arrow function, with more complex functions, we will also need the return keyword. As we add more code and more parameters, it gets a little bit more complex and we kind of lose the advantage of arrow functions.

## Arrow function with a complex structure:

```js
const ageAsArrowFunction = (birthYear, firstName) => {
  const age = new Date().getFullYear() - birthYear;
  return `Hey ${firstName}, you are ${age} years old.`;
};
const myAge = ageAsArrowFunction(1999);
console.log(myAge);
```

**IMPORTANT!** The arrow functions, unlike the function declarations or expressions, do not get a so-called this keyword.

# Functions calling Other Functions

This is something that we do all the time in JavaScript. For example if we have a function that performs a complex activity or set of activities, but needs the result of another function to continue it's processing. This also helps us to ease the maintenance since we are writing cleaner and reusable code.

As a side note, keep in mind that the return statement immediately exits the function, therefore, nothing below it will be executed.

# Introduction to Arrays

Arrays are data structures. They are like containers into which we can throw variables and then reference them. The two main data structures in JavaScript are Arrays and Objects. Arrays can be created using any of this two forms:

```js
const firstArray = ["val1", "val2", "val3"];
const secondArray = new Array("val1", "val2", "val3");
```

Arrays can hold as many values as we want. Also values of any type that we'd like. In order to access a value of an array we just have to use it's index. Keep in mind that arrays are zero-based index. When trying to access a specific element in the array, inside of the brackets we can put any expression (anything that produces a value)

```js
console.log(firstArray[0]); //will print val1
console.log(firstArray[firstArray.length - 1]); //will print val3
```

Arrays are mutable, we can add more values at the end of the current array and even update values from specific positions in the array. Only primitive values are immutable, but an Array is not a primitive value. Even if we define an array using const, we will still be able to update any of it's values, but we can't replace the entire Array.

```js
firstArray[1] = "newVal";
```

An array can actually holds values with different types all at the same time. We can also create nested Arrays.

## Basic Array Operations

- push: Adds elements to the end of an array. This is a function, since it's a function, it returns a value. The value that it returns is the length of the new array.
- unshift: It adds elements to the beginning of the array. It also returns the length of the new array.
- pop: It will remove the last element of the Array. It returns the removed element.
- shift: Will remove the first element of the Array. It returns the removed element.
- indexOf: This will show us the index of a certain element in the Array. It needs the element from which we want the reference. It will be returned in a zero-based index.
- Includes: Simply returns true if an element is in the Array and false if not. It uses strict equality for the check.

# Introduction to objects

In objects we define key value pairs. By doing so, we can give each value a name. We define a new object using the curly braces {}. The key is the variable name, the value can be of any type that we want. We can add as many key:value pairs as we want, we just have to separate them with commas. Inside the value definition we can place any expression that we want.

Keys are also called properties. We use objects to essentially group together different variables that really belong together. The main difference between objects and Arrays is that in objects, the order of the values does not matter at all when we want to retrieve them. This means that we should use arrays for more order data and objects for more unstructured data.

## Dot vs. Bracket notation

When we want to access a property of an object, we can do so with the dot notation or with the brackets notation.

```js
myInformation.firstName;
myInformation["firstName"];
```

The main difference is that in the brackets notation, we can actually put any expression that we'd like. We can compute from some operation the property that we want to access.

```js
const nameKey = "Name";
myInformation["first" + nameKey];
myInformation["last" + nameKey];
```

Keep in mind that if try to access a property on an object and it doesn't exist, we will be getting an undefined value.

We can use both Dot and Bracket notation to add new properties to objects. In order to achieve this we just have to assign the new key its specific value, as follows:

```js
myInformation["newProperty"] = "I'm brand new";
myInformation.anotherProperty = "I was added using the dot notation!";
```

## Object methods

Since objects are just another type of value, it's possible to store a key value pair in which the value is a function. Any function that is attached to an object is called a method. We can access the method with the dot and bracket notation that we previously saw.

In every method we have access to a special variable called "this". The this variable is equal to the object calling the method. We can also use this in order to create new properties for an object inside a method, this is useful when we want to optimize the computation of a recurrent value.

# The for Loop

All loops are control structures. Loops allow us to automate repetitive tasks. The for loop has three main parts. The first part is the initial value of a counter. The second part is a logical condition that is evaluated before each iteration of the loop, if the condition is true, then the next loop iteration will run, as soon as the condition is false, the loop stops. Finally, the third part of the for statement is increasing the counter.

With those three parts defined, we can then create the code block that we want to be repeated. After each iteration of the loop the third main part of the for will be executed (increasing/decreasing the counter).

There are two important statements for loops. They are continue and break statement. The continue statement is used to exit the current iteration of the loop and continue to the next one. On the other hand, break is used to completely terminate the whole loop execution. When working with for loops we can both increase and decrease the counter of the loop.

When working with loops we can use loops inside other loops (nested loops).

# The while loop

In order to implement a while loop, we can only specify a condition. We will continue executing while our condition is still true. This means that the while loop is more versatile than the for loop, which means it's useful in a larger variety of situations, it is useful for situations in which we don't know the specific amount of iterations that we will have in our loop execution. In the while loop, first the condition is evaluated, if it's true it enters the code block, otherwise the code block inside the while loop it's not executed.
