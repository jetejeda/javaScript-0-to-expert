# A brief introduction to JavaScript
JavaScript is a High-Level Object-Oriented, multi-paradigm programming language. It helps us to add Dynamic effects and web applications in the browser. We can use it to create Front-end, back-end, native mobile and native desktop applications .

We can use JavaScript code inside html files using inline scripts (with the script tag). By doing so, we don't have to load any other file. But we can also just call JavaScript files from the html file (which is the best practice)

# Values and variables

## Values
A value is basically a piece of data, is the fundamental information unit. A value can be defined as one of this:
1. Object: Many variables stored as a single value.
2. Primitive: Single value.
    - Number: Floating point numbers, so, they will always have decimals, even if we don't see them or don't define them.
    - String: Sequences of characters, they can be defined using single or double quotes.
    - Boolean: Logical type that can only be true or false.
    - Undefined: Value taken by a variable that is not yet defined (like an empty value)
    - null: It also means empty value. __Warning__: if we try to access the type of a null value, it will be shown as an object type.
    - Symbol: Is a value that is unique and cannot be changed (nearly deprecated)
    - Big Int: Integers that are to large to be represented by the number type.

## Variables
We can use them to store Values. They have to begin with a lowercase letter or the dollar symbol and can only contain letters, underscores, or the dollar sign. Another important aspect is that we can't use any reserved word as variable names. Another convention is to name our variables with a descriptive name, this will help us to have a cleaner code.
There are conventions for naming variables, the main conventions are:
- __camelCase__: Whenever you have multiple words in a variable name, the first word should begin with a lowercase and the other words should begin with an uppercase. This is the standard in JavaScript. Ex: firstName.
- __snake_case__: The main difference is that in order to separate words we use a "_". Ex: first_name

```js
let firstName = "Jose" //firstName --> Variable, "Jose" --> Value
```

# Data Types
JavaScript has a feature called dynamic typing which means that when you create a new variable, you do not have to manually define the data type of the value that it contains. This is important because in JavaScript is the value that has a type, not the variable. Another advantage with dynamic typing is that later in our code, we can assign a new value with a different data type to the same variable. 

We can use the typeof operator to retrieve the type of a variable or value.
```js
let firstName = "Jose"
console.log(typeof firstName)
console.log(typeof true)
```

# How to declare variables in JavaScript
let and const were introduced in ES6. var is the old way of declaring variables. It's a good practice to have as little variable mutations or variable changes as possible, this is because changing variables introduces a potential to create bugs.

__Warning:__ You might think that we actually don't even have to declare variables at all, since it's actually not mandatory. we can just write something like myVariable = "hey!" and it will not fail, even without declaring that variable before. But this is a pretty terrible idea since it doesn't create a variable in the current scope, instead it will create a new property in the global object.
## var
It should be completely avoided. However is important to know it's uses as we might find it in older code bases. It's pretty similar as let. It declares mutable variables. It is function-scoped
## let
We use it to declare variables that can change later (during the execution of our program). In technical terms the reassigning from a value to a variable is also called mutate. It is block-scoped

## const
We use it to declare variables that are not supposed to change at any point in the future. The value in a const variable cannot be changed. It is called an immutable variable. We cannot declare empty const variables.


# Basic operators
They allow us to transform or combine multiple values. There are many categories for operators like:
- Mathematical/arithmetic: + (can be used to concatenate strings) - / * % ** (** is the power operator)
- Comparison: Used to produce boolean values, < > <= => == === !=
- Assignment: = += -= *= /= ++ --

## Operator precedence
Is the order in which operations are executed. The highest precedence is given to the parenthesis.

[operator table from mozilla (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

# Strings and template literals
We can create strings with template literals. Each string must start and end with the same symbol " or '. Therefore, if we need a string with " inside of it we can start it with a ' and vice versa:
```js
let sayHi = "Hey! I'm Jose"
let secondExample = 'They are called "devs"'
```

Template literals were introduced in ES6. With them we can write a string in a more normal way, and then insert the variables directly into the string. For doing so we just have to create the string with the ``symbols and inside of them, we can add all the javaScript code that we want/need inside ${}.

The ${} is called a placeholder.
```js
const newIntroduction = `I'm ${firstName}, a ${(currentYear - birthYear)} years old ${job}!`;
```

Another great use case for template literals is for creating multi-line strings.

# The if statement
It's a control structure, it allow us to have more control over the way that our code is executed. With the if statement we can control which blocks of code our program will have to execute and the blocks that should not execute, all based on the conditions defined for the if statement.

# Type conversion and Coercion
Type conversion is when we manually convert from one type to another. Type coercion is when javaScript automatically converts types behind the scenes for us.

## Conversion
When working with any type conversion that involves a number, if the operation fails, JavaScript will return a Nan value which stands for Not a Number. Nan really means an invalid number, but the data type of NaN is actually a number.

Javascript can only convert between three types, we can convert to a Number, an String or to a Boolean.

## Coercion
It happens whenever an operator is dealing with two values that have different types. In that case, JavaScript will then, behind the scenes, convert one of the values to match the other value so that in the end the operation can be executed.

Whenever there is an operation between a number and a string, the number will be converted to a string. Not all the operators do type coercion to string, for example the minus (-) operator triggers a conversion in which strings are converted into numbers. It also happens with the multiplication (*) and division (/) operators that converts strings to numbers.

Type coercion can introduce many unexpected bugs into our program, that's why it is really important to learn how it actually works.

## Truthy and Falsy values

Falsy values are values that are not exactly false, but will become false when we try to convert them into a Boolean. There are five falsy values:
- 0
- ''
- undefined
- null
- NaN

This values are not exactly false initially, but they will become when converted to a Boolean. Everything else are so-called truthy values. For example any number that is not zero, any string that is not empty will be converted to true. This is helpful for if conditions, since everything inside the condition statement will be casted to Boolean.

In practice, a conversion to Boolean is always implicit, not explicit, this means that we always rely on coercion.

# Equality Operators: == vs. ===

The === operator is called the strict operator because it does not perform type coercion, so, it will only return true when both values are exactly the same. 

On the other hand, there is the loose equality operator (==) that actually does type coercion. __As a general rule for clean coding, we should avoid the loose equality operator as much as we can. It's better to convert a value manually before any comparison than relying on the loose equal operator.__

# Boolean logic
Using true and false values to solve complex logical problems. In order to do that we use several logical operators to combine true and false values. The main boolean operators are AND, OR and NOT, but there are many more. The NOT operator actually has precedence over the AND and OR operators.

# The switch statement
is an alternative way of writing a complicated if/else statement. We use it when we want to compare one value with multiple options. The switch statement does an strict comparison between the value and each case. It's main purpose is for quality, not actually for comparing stuff.

With the switch statement, we need a break for every switch options, this is because all the cases are within the same code block, so without the break, it will also execute the rest of the cases until it finds a break or until the switch statement has finished.


