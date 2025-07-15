// function
// variable scoping: var vs let vs const
// Function Expressions vs function declaration
// arrow function (// 3. this keyword (after window object))

addNumbers();

var x = 10;

// function declaration
function addNumbers() {
  var y = 20;
  console.log(x + y);
}

// calling the js function
addNumbers();
addNumbers();

// parameterized function
// parametrs - a, b
function subtract(a, b) {
  console.log(b - a);
}

subtract(10, 20); //arguments
// subtract(10, 20, [], {}, "", null, [{}, {}], function (){});//any datatype cam be passed
subtract(100, 200);

// reusability

// return a value
function multiply(num, numTwo) {
  //local scope
  var result = num * numTwo;
  // console.log(this);//window object
  return result;
  console.log("hello"); //dead code
}

// console.log(result);//give error
var r = multiply(5, 100); //passing function as a value
console.log(r);

// object method, this keyword (refer to some objects)
var person = {
  firstName: "alina",
  lastName: "joe",
  age: 20,
  details: function () {
    var v = this;
    console.log(v); //person
  },
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
  contact: {
    email: "admin@gamil.com",
    func: function () {
      console.log(this); //contact
    },
  },
};

// object method
person.details();
console.log(person.firstName);
console.log(person.contact.func());

// this inside js document -> window object (in debugging lecture)
// this inside object -> refer to the object
// this inside function -> parent object of the function
// this inside strict -> error (M2)

// variable scoping: local & global
var firstName = "alex"; //global scope

// scope = accesibility
function displayName() {
  // local scope: any variabel created inside function
  var lastName = "joe";
  var firstName = "alaya";
  return firstName + " " + lastName;
}

console.log(firstName);//alex
console.log(displayName());

// hoisting (js is moving only declaration at the top of current)
h = 10;//initialization
console.log(h);//using the variable
var h;//declaration

//ideal var h = 20;

//initialization is never hoisted
var r;//decalartion 
console.log(r);//undefined
r = 20;//initialization

// var vs let vs const (ES6)

//  let: is used declare the block scope variable
var numVal = 20;//global
{
    var numVal = 30;// 
    console.log(numVal);//30
}
console.log(numVal);//30

// using 
var z = 100;//global
{
    let z = 200;//block scoped variable
    z = 500;
    console.log(z);//500
}

console.log(z);//100

// 2. re-decalartion is not allowed
// let z = 300;
// console.log(z);//give error

// 3. let variable are not hoisted (temporal dead zone)
// o = 60;
// console.log(o);
// let o;//give error

// Math Object & Date Object
console.log(Math.PI);
console.log(Math.random());
console.log(Math.round());


// Task
// create parametrized method/function to multiply 3 numbers
// create parametrized method to divide 2 numbers
// write function to convert negative number to positive number (Math object)
