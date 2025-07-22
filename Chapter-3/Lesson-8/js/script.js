// OOPS
// JavaScript Prototype & Prototype Chain, inheritance
// class & objects
// bind, call, apply

// objects -> properties & methods

// encapsulation:
// class: template of JS objects
class University {
  constructor(fName, lName, dept, age) {
    // console.log(this);//University
    this.firstName = fName;
    this.lastName = lName;
    this.department = dept;
    this.age = age;
  }

  details() {}
}

const studentOne = new University("alina", "joe", "cse", 19); //object or instance of class is created
const studentTwo = new University("alex", "joe", "ece", 18);
console.log(studentOne, studentTwo);
studentOne.details();

// Inheritance: inherit 1 class from another class
// parent/base
class Shape {
  constructor(id) {
    this.id = id;
  }
}

// child/derived 
class Circle extends Shape {
  constructor(radius, id) {
    super(id);//super will call the parent class's constructor function
    this.radius = radius;
  }

  circumference () {
    console.log(2 * Math.PI * this.radius);
  }
}

let c = new Circle(5, 1);//radius, id]
c.circumference();
console.log(c);


// Prototype
// Employee -> object function constructor
function Employee(name, salary, city) {
  this.name= name;
  this.salary= salary;
  this.city = city;
}

let empOne = new Employee("harry", 80902, "pune");
console.log(empOne);

//child
function Programmer(name, salary, city, language) {
  // Employee.call(this, name, salary, city )
  this.language = language;
}

console.log(Programmer.prototype);

// inherit the prototype 
Programmer.prototype = Object.create(Employee.prototype)

//set the constructor
Programmer.prototype.constructor = Programmer;

let p = new Programmer("harry", 8080, "pune", "javascript");


// Task
// 1. Create a class Car: city(), specialFeature()
// name, brand, color, manufactureYear

// 2. Create a class Book: type_of_book()
// no. of pages, type of pages, author

// 3. Create a class Animal: walk(), eat(), climb()
// gender, name, disease

// Inheritance:
// 1.  Create parent class: Electronics (methods & properties: name, version, company
// name)
// and child class(laptop, ipad, mobile, tablet):
// create methods” configuration, price()

// Explore Object(), Array() methods
