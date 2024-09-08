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
