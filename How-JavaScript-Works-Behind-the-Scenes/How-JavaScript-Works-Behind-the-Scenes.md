# High-Level Overview of JavaScript

As mentioned before, JavaScript is a High-level language which means that developers don't have to worry about managing resources at all. This language has abstractions that take all of that work away from us, this makes the language easier to learn and use, but the down side is that programs will never be as fast/optimized as low level languages.

Another powerful tool that takes memory management away from us is the garbage-collection which is an algorithm inside the JavaScript engine that automatically removes old unused objects from the computer memory.

One of the facts that makes JavaScript so popular is the fact that it's a multi-paradigm language. A paradigm is an approach and an overall mindset of structuring our code. This will ultimately direct the coding style and technique in a project that uses a certain paradigm. Paradigms can be classified as:

- Imperative
- Declarative

The three main paradigms are:

1. Procedural programming: Is basically organizing the code in a very linear way and some functions in between.
2. Object-oriented programming (OOP)
3. Functional programming (FP)

JavaScript is a prototype-based, object-oriented approach. Almost everything in JavaScript is an object, except for primitive values. It is also a first-class functions, this means that functions are simple treated as regular variables. This allow us to pass functions into other functions and we can even return functions from functions (this is the basis for FP).

JavaScript is a dynamically typed language. In JavaScript, we don't assign data types to variables, they only became known when the JavaScript engine executes our code. Also, the types of variables can easily be changed as we reassign variables.

JavaScript runs in one single thread, this means that it can only do one thing at a time. Therefore, we need a way of handling multiple things happening at the same time. What happens with long-running tasks then? because it sounds like they would block the single thread where the code is running. Of course we don't want that, in order to achieve the non-blocking behavior we can use the event loop. The event loop executes tasks in the "background" and puts them back in the main thread once they are finished.

# The JavaScript Engine and Runtime

The JS Engine is where we execute our code. Every browser has its own JS engine, but the most well known engine is Google's V-Eight. It powers Google Chrome, but also nodeJs

## Components of a JavaScript Engine

### Call stack

The call stack is where our code is actually executed. It is called using execution contexts

### Heap

It is an unstructured memory pool which stores all the objects that our application needs.

## JavaScript compiled or Interpreted language

JavaScript used to be a purely interpreted language, but the problem with interpreted languages is that they are much slower than compiled languages. This used to be right, but due to modern applications, low performance is no longer acceptable.

Modern JavaScript engines now use a mix between compilation and interpretation which is called Just-In-Time compilation. This approach basically compiles the entire code into machine code at once and then executes it right away.

### Just-In-Time Compilation for JavaScript

1. The piece of code enters the engine.
2. The code is parsed (the engine reads the code). During the parsing, the code is parsed into a data structure code the Abstract Syntax Tree (AST). This step also checks if there are any syntax errors
3. The code is compiled, it uses the AST to compile it into machine code.
4. The machine code generated gets executed right away.

- **IMPORTANT:** Modern JavaScript Engines have some pretty clever optimization strategies. They create a very un-optimized version of machine code in the beginning just so that it can start executing as fast as possible. Then in the background, this code is optimized and recompiled during the already running program execution. This can be done multiple times and after each optimization the un-optimized code is simply swept for the optimized code without ever stopping execution.

## The JavaScript Runtime

The most common one is the browser. We can imagine JavaScript runtime as a big box/container which includes all the things that we need in order to use JavaScript. The heart of any JS runtime is its engine, but the engine alone is not enough, we also need access to the web APIs. The web API's are functionalities provided to the engine, but are not part of the JavaScript language itself. JavaScript simply gets access to these APIs trough the global Window object.

A typical JS runtime also includes a so called callback queue. This is a data structure that contains all the callback functions that are ready to be executed. For example, we attach event handler functions to DOM elements like a button to react to certain events. These event handler functions are also called callback functions. As the event happens, for example a click, the callback function will be called.

Complete process:

1. You clicked a button
2. The callback function is put into the callback queue
3. When the call stack is empty, the callback function is passed to the stack
4. The callback function is executed

This happens by the event loop. It takes callback functions from the callback queue and puts them in the call stack so that they can be executed.

# Execution Contexts and The Call Stack

After the code compilation, a global execution context is created for the top-level code. The top level code is anything that is not inside any function.

An execution context is an abstract concept. Is basically an environment in which a piece of JavaScript is executed. They store all the necessary information for some code to be executed. Such as local variables or arguments passed into a function. In any JavaScript project, no matter how large it is, there is only ever one global execution context.

Once the top-level code execution is finished, functions finally start to execute as well. For each and every function call, a new execution context will be created containing all the information that is necessary to run exactly that function. All the execution contexts together make up the call stack.

When all functions are done executing, the engine will keep waiting for callback functions to arrive so that it can execute these.

## What is inside the execution context

The first thing that's inside any execution context is a so-called variable environment. In this environment, all our variables and function declarations are stored and there is also a special arguments object.

The arguments object contains, all the arguments that were passed into the function that the current execution context belongs to.

Functions can also access variables outside of the function, this works because of the scope chain which basically consist of references to variables that are located outside of the current function. To keep track of the scope chain it is stored in each execution context.

Each context also gets a special variable called the this keyword.

The content of the execution context is:

- Variable environment
- Scope chain
- this keyword

This content is generated in the creation phase which happens right before the execution.

**IMPORTANT!** Execution contexts related to arrow functions do not get their own arguments keyword nor do they get the this keyword. Instead they can use the arguments object and the this keyword from their closest function parent.

## The call stack and the execution contexts

The call stack is where execution contexts get stacked on top of each other in order to keep track of where we are in the programs execution. The execution context that is in top of the stack is the one that is currently running. And when is finished running it will be removed from the stack, and the execution will go back to the previous execution context.

# Scope and The Scope Chain

- Scoping: Controls how our program's variables are organized and accessed.
- Lexical scoping: Scoping is controlled by placement of functions and blocks in the code. Lexical scoping means that the way variables are organized and accessed is entirely controlled by the placement of functions and of blocks in the programs code.
- Scope: Is the space or environment in which a certain variable is declared (variable environment in case of functions). In JavaScript there is a global scope, function scope and block scope
- Scope of a variable: Region of our code where a certain variable can be accessed

## Scope types in JavaScript

### The global scope

For top-level code (outside of any function or block). The variables declared in global scope are accessible everywhere

### The function scope

Each and every function creates a scope. The variables declared inside that function scope are only accessible inside that function. It is also called a local scope.

They are created for all kinds of functions, so function declarations, function expressions and arrow functions all create their own scope.

### The block scope

Staring in ES6, blocks also creates scopes now. Blocks is everything that is between curly braces. Variables created inside a block are only accessible inside that block. The difference is that this rule only applies to variables declared with let or const, if we create a variable using var, then that variable would still be accessible outside of the block.

All functions are also block scoped (only in strict mode which should always be activated).

### The scope chain

Every scope has access to all the variables from all its outer scopes. This applies for both variables and arguments inside functions.

It's important to keep in mind that the variables are not copied from one scope to another. If the engine can't find a variable in the current scope it will start with a variable lookup in the scope chain until it finds the desired variable or throw an error if it couldn't find the variable. This is only to look at parent scopes, the parent scopes will never have access to the variables from its inner scopes.

Variables declared with var, block scopes don't apply at all. They are function scoped, not block scoped. Let and const on the other hand are block scoped.

## The Scope Chain vs. Call Stack

The scope chain has nothing to do with the order in which functions were called. In other words, the scope chain has nothing to do with the order of execution contexts in the call stack. The scope chain does get the variable environments from the execution context, but that's it.
