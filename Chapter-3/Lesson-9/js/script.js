//prototype, chain, Object methods
//call, apply, bind
//callback functions

// class
class Book {
  constructor(noOfPages, author, genre) {
    this.noOfPages = noOfPages;
    this.author = author;
    this.genre = genre;
  }

  bookDetails() {}
}

const bookOne = new Book(100, "alina", "sci-fiction");
console.log(bookOne);

// Inheritance
class Paperback extends Book {
  constructor(material, noOfPages, author, genre) {
    super(noOfPages, author, genre);
    this.material = material;
  }
}

const p = new Paperback("paper", 200, "alex", "thriller");
console.log(p);

// Prototype
// object function constuctor
function Books(genre, author) {
  this.genre = genre;
  this.author = author;
}

Books.prototype.bookDetails = function() {

}

const b = new Books("comedy", "harry");
console.log(b);


function Paperbacks(material, genre, author) {
  Books.call(this, genre, author); //to call parent function constructor(Books)
  this.material = material;
}

// copy the prototype
Paperbacks.prototype = Object.create(Books.prototype);

// set the constrcutor
Paperbacks.prototype.constructor = Paperback;

const paperb = new Paperbacks("paper", "sci-fi", "alex");
console.log(paperb);

console.log(Array);

// function Array() {
// this.isArray = function () {
// };
// }
// function Object() {
// this.freeze = function () {
// }
// }
// function String() {
// this.indexOf = function (){}
// }

// function Number() {
// this.toFixed= function () {
// }
// }

// function Function() {}
// don't use this
// let str = new String(20);
// let num = new Number(10);

// let str = "hello"
// let val = 20;

// call(), apply(), bind()
const user = {
  fullName: function (country) {
    console.log(this.firstName + " " + this.lastName + " living in " + country);
  },
};

const person = {
  firstName: "alina",
  lastName: "joe",
  age: 20,
};

user.fullName.call(person, "India");

// apply()
// user.fullName.apply(person, []);

let arr = [20, 10, 200, 100];
console.log(Math.max(10, 30, 100, 20));

console.log(Math.max.apply("", arr));
console.log(Math.min.apply("", arr));

// bind() 
const users = {
    firstName: "alaya",
    lastName: "hen",
    display: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}

const res = users.display.bind(users);//this -> users
res();


// try it in console
// console.log(Object.defineProperty());
// Array, Function, Number, String 