// Variable in Js  - let , const ,  var
// let - block scope
// const - block scope
// var - function scope

let accountcity = "nagpur";
console.log(accountcity);

const rollno = 101;  // can't upadte once assign
// rollno = 102; // error: Assignment to constant variable.

var name = "Rahul"; // can't use in block scope
console.log(name);
/*
prefer not use var Because of issue in Block Scope and Functional Scope.
*/
//console.log(name); // error: name is not defined

//Example of Block Scope with let and const
{
    let x = 10;
    const y = 20;
    console.log(x); // Outputs: 10
    console.log(y); // Outputs: 20
}

console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
