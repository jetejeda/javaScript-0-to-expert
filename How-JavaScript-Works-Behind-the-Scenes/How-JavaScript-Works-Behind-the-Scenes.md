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
