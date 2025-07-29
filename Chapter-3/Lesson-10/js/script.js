// Pure function
function add(a, b) {
  return a + b;
}

add(10, 20);

// Impure function
// let counter = 10;
function addVal(a, b) {
  console.log(counter + a, b);
}

addVal(20, 40);

// First Class Objects (treating function like a value)
let subtract = function () {
  console.log(20 - 10);
};

// HOF: High ordered function -> parent)
function parent() {
  return function () {
    console.log(10 + 20);
  };
}

parent(10, 20, {}, [], "", null, subtract); //arguments

function counter(callback) {
  callback(10, 20);
}

counter(add, subtract); //counter = HOF

//Immutibility
let str = "hello";
// str[0] = "hi";//error
console.log(str.slice(0, 4));

// Declarative and Imperative code
// declarative code -> using inbuilt function
function reverseString(str) {
  console.log(str.split("").reverse().join(""));
}

reverseString("hello");

// Imperative code -> not using inbuilt function
function reverseStr(str) {
  let s = "";
  for (let i = str.length; i >= 0; i--) {
    s = s + s[i];
  }
  console.log(s);
}

reverseStr("hello");

// Task
// ["hello", "hi", "world"]
// ["olleh", "ih", "dlrow"]

// Debugging

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
