// DataTypes in Js - 
// 1. Primitive Data Types - Number, string , boolean, null, undefined, symbol
// 2. Non-Primitive Data Types - object , array , function

// premitive type
let age = 22;  //number 
let name = "tushar" // string 
let isAdult = true; // boolean
let address = null; // null - is a standalone value
let country = undefined; // output : undefined
let hobbies = Symbol("coding"); // symbol - is a unique identifier for a value

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Symbol("coding")); // symbol

// non-primitive type 
let person = { name: "tushar", age: 22 }; // object
let numbers = [1, 2, 3, 4, 5]; // array
let add = function (a, b) { return a + b; } // function

console.log(typeof person); // object
console.log(typeof numbers); // object
console.log(typeof add); // function