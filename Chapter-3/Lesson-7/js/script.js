// var vs let vs const

// const: used to declare block scoped variable with constant reference
// 1. block scoped variable

var a = 10; //global

{
  // console.log(a);//giev erreor due to hoisting
  const a = 20; //block scoped
  // a = 40;//give error
  console.log(a); //20
}

console.log(a); //10

//
const arr = [10, 20, 30, 40];
arr[0] = 100;
// arr = [100, 20, 30, 200];//give error
console.log(arr); //[100, 20, 30, 40]

// 2. re-decalaration is not allowed
// const a = 10;
// console.log(a);

// 3. varible declared with const is not hoisted (temporal dead zone)
// x = 10;
// console.log(z);
// const z;

// Function Expressions vs function declaration
add();
add();
add();
//Function declaration
function add() {
  console.log(10 + 20);
}

add();

// addVal();//give error
// Function expression
var addVal = function () {
  console.log(20 + 30);
};

addVal();

// with arrow function
// var fun = () => {
// }

// lexical scope & closures
function incrementCounter() {
  let counter = 5;
  counter++;
  return counter;
}

let result = incrementCounter();
console.log(result); //6
console.log(incrementCounter()); //7
console.log(incrementCounter()); //8

// using closure
// main/parent function/outer function - incCounter
function incCounter() {
  let counter = 5; //lexical scope/parent scope

  return function () {
    counter++; //8
    console.log(counter); //8
  };
}

const res = incCounter();
console.log(res);
res(); //6
res(); //7
res(); //8

// Task: create a main function, based on a condition return either of 1 function from main function

// (ES6) arrow function (fat arrow)
// 1. shorter syntax
function subtract() {
  return 20 - 10;
}

subtract();

// using arrow/fat arrow
subtract();

subtract = () => {
  return 200 - 10;
};

// same as
subtract = () => 200 - 10; //returning 200 - 10

subtract();

// 2. return keyword

// 3. this keyword
let person = {
  firstName: "alina",
  details: function () {
    console.log(this); //person
  },
  detail: () => {
    console.log(this); //window
  },
};

person.details();

// sample = () => {
// console.log(this)
// }

// function sample() {
// console.log(this);//window
// }

// IIFE / Self - invoking functions
var x = "hello";

(function (a) {
  var x = "world"; //local scope
  console.log(a, x);
})("Hi");

(() => {
  console.log("Hello");
})();
