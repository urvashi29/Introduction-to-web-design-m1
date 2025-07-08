// objects
// key/value pair or Property/value pair

var person = {
  name: "alina",
  age: 20,
  salary: 79800,
  isMarried: false,
  contact: {
    email: "alina@gmail.com",
    phone_number: 6000000000,
  },
};

var products = {
  price: 89080,
  discountedPrice: 79809,
};

console.log(person.contact.email);
console.log(person.name, person.salary);
console.log("Products :", products.discountedPrice);

var car = {
  brand: "Volkswagon",
  color: "white",
  price: 2000000,
  model: " GHJ-7979",
  fuelType: "diesel",
  seats: 5,
  mileage: "89",
};

console.log(typeof car); //object

// arrays: store array elements
// index/position starts from 0 (always integer value start from 0)
var color = ["pink", "blue", "red", "orange", "white"];
var num = [2, 4, 3, null, undefined, {}, "", true];

// access array element in array
console.log(color[0], color[3]);
console.log(typeof color); //object

console.log(num[4]); //undefined

// conditional statememt (if, if else, else if, switch)

// syntax
// if(condition(T/F)) {
//code
// }

var firstName = "alina";
if (firstName === "alina") {
  console.log("FirstName: " + firstName);
}

// if else (either or)
if (firstName === "alaya") {
  console.log("FirstName: " + firstName);
} else {
  console.log("Wrong Input");
}

// Ternary opeartor (?:)
// (condition) ? (if true) : (if false)
firstName === "alina"
  ? console.log("FirstName: " + firstName)
  : console.log("Wrong Input");

// else if (either or)
var age = 20;
if (age === 20 && firstName === "alex") {
  console.log("Details: " + age + " " + firstName);
} else if (firstName == "alina") {
  console.log("name: " + firstName);
} else if ((age = 20)) {
  console.log("age: " + age);
} else {
  console.log("wrong input");
}

// switch
var ageVal = 18;

// ageVal (===) case values

switch (ageVal) {
  case 1:
    console.log("not eligible");
    break;
  case 2:
    console.log("not eligible age");
    break;
  case 18:
    console.log("eligible to vote");
    break;
  default:
    console.log("wrong input");
}

// applicability
var userEmail = "admin@gmail.com"; //signup
var email = "admin@gmail"; //come from user (login)
if (email === userEmail) {
  console.log("user can login");
} else {
  console.log("Invalid Email Credentials");
}

//number is even or odd
var num = 20;
if (num % 2 == 0) {
  console.log(num + " is even!");
} else {
  console.log(num + " is odd!");
}

// find biggest of 3 numbers
var a = 10,
  b = 20,
  c = 50;

var max = 0;

if (a > b) {
  max = a;
} else {
  max = b;
}

if (max > c) {
  console.log(max + " is greater!");
} else {
  console.log(c + " is greater!");
}

// Try this: switch (0 -> sunday | 1 -> monday till 6 -> saturday)

// Loops (for, while, do while)
// for...in(objects) & for...in(arrays & string) (ES6)

//iteration = 1 loop = 1 block of code excution

// for(statement 1; statement 2; statement 3) {
//block of code
// }

// statement 1 -> initialization
// statement 2 -> condition
// statement 3 -> inc/dec

// steps of execution
// st 1 -> st2 -> boc -> st 3 -> st 2 -> boc -> st3 till the condition is not false

for (var j = 10; j >= 0; j--) {
  console.log(j); //10 9 8 7 6 5 4 3 2 1 0
}

for (var i = 1; i <= 20; i++) {
  console.log(i); //1 2 3 4 5 .... 19 20
}

// arrays, string
var arr = [10, 39, 28, 38, 10]; //

for (var i = 0; i < arr.length; i++) {
  console.log("array element at " + i + ":" + arr[i]); //10 39 28 38 10
}

for (var j = arr.length - 1; j >= 0; j--) {
  console.log(arr[j]);
}

// string
// in String, indexing starts from 0
var str = "hello world";
console.log(str[0]); //

for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}
