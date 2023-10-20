
let name = "Alice";
const age = 30;


// Data Types
// Primitive Data Types:
// Number (e.g., 42, 3.14)
// String (e.g., "Hello")
// Boolean (e.g., true, false)
// null and undefined
// Complex Data Types:
// Object (e.g., { name: "Bob", age: 25 })
// Array (e.g., [1, 2, 3])

let number = 42;
let greeting = "Hello, World!";
let isTrue = true;
let person = { name: "Alice", age: 30 };
let numbers = [1, 2, 3];


// Operators

// let a = 5;
// let b = 3;
// let sum = a + b; // Addition
// let isGreater = a > b; // Comparison
// let isTrue = true;
// let isFalse = !isTrue; // Logical NOT



// This is a single-line comment


/*
  This is a
  multi-line comment
*/

// Functions

function sayHello(name) {
  console.log("Hello, " + name + "!");
}

const greet = (name) => {
  console.log(`Hello, ${name}!`);
}

function root_of_binomial(a, b, c) {
  let delta = b * b - 4 * a * c;
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  return [x1, x2];
}
