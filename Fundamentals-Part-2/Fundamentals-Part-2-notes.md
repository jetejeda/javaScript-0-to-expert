# Strict Mode in JavaScript
It's a special mode that we can activate in JavaScript, which makes it easier for us to write a secure JavaScript code. In order to activate it, we just have to add this string at the beginning of the file:
```js
'use strict';
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

__Without strict mode:__
its not showing any error
![console without strict mode activated](/Fundamentals-Part-2/images-for-course-notes/image.png)

__strict mode activated:__
It displays the error with some information about it!
![console with strict mode activated](/Fundamentals-Part-2/images-for-course-notes/image-1.png)

Strict mode also introduce a short list of variable names that are reserved for features that might be added to the language a bit later. Here is an example using the word interface:

```js
'use strict';
const interface = "This should fail thanks to the strict mode";
```
![trying to use a future reserved word](/Fundamentals-Part-2/images-for-course-notes/image-2.png)

# Functions
A function is a piece of code that we can reuse several times in our code. It's like a variable but for whole chunks of code.
They can hold one or more complete lines of code. After we have created our function we can then execute it, in order to execute/invoke a function we just have to call it. We can call a function as many times as we want.

In functions we can pass data and additionally, a function can also return data as well. In order to send information to a function we will need parameters. Functions allow us to write more maintainable code because with functions we can create reusable chunks of code, its a very important principle for writing clean code. 

The parameters are like variables that are specific only to the function and they will get defined once we call the function. They represent the input data of the function. When calling a function that has parameters, all the values that we send are called arguments. Thanks to the parameters defined in some functions, we can reuse the function with different input values (arguments) and get a different output. 

If we never call a function, the code inside of it will never be executed. __Keep in mind that not all functions need to return something and not all functions need to accept parameters.__
```js
// Functions with parameters
function fruitProcessor(apples, oranges) {
    return `Here is your juice composed of ${apples} apples and ${oranges} oranges!`
}
// Passing the arguments to the function
let getJuice = fruitProcessor(3, 2);
console.log(getJuice);
```
If we assign a function that doesn't return anything to a variable, after the execution the variable will contained undefined (produced by the function).