// Objects
//key/value or property value pair

// 1. object literal
var person = {
  firstName: "alina",
  lastName: "joe",
  age: 20,
  isMarried: false,
  city: "pune",
  designation: "Software Developer",
  hobbies: ["dancing", "travelling", "singing"],
  contact: {
    email: "alina@gmail.com",
    contactNumber: 99999999999,
  },
};

// display/access
console.log(person.firstName);
console.log(person.contact.email);
console.log(person.hobbies);

// 2. Object.create()
const newPerson = Object.create(person);
console.log(newPerson.hobbies);
console.log(newPerson); //{}

// 3. new keyword:(cover in OOPS)

console.log(Object.keys(person)); //return an array with only properties
console.log(Object.values(person)); //return an array with only values

// delete
delete person.city;
console.log(person);

// update
person.age = 24;
console.log(person);

// add
person.salary = 899090;
console.log(person);

// array of objects: [{}, {}, {}]
// var products = [
//   {
//     id: 10,
//     productName: "",
//     currentPrice: 90,
//     discountedPercentage: 10,
//     actualPrice: 100,
//     color: "pink",
//     manufacturingDate: "",
//     brand: "",
//     quantity: 10,
//     rating: 3.5,
//     productImage: "",
//   },
//   {
//     id: 20,
//     productName: "",
//     currentPrice: 180,
//     discountedPercentage: 10,
//     actualPrice: 200,
//     color: "purple",
//     manufacturingDate: "",
//     brand: "",
//     quantity: 50,
//     rating: 3,
//     productImage: "",
//   },
//   {
//     id: 30,
//     productName: "",
//     currentPrice: 270,
//     discountedPercentage: 10,
//     actualPrice: 300,
//     color: "pink",
//     manufacturingDate: "",
//     brand: "",
//     quantity: 20,
//     rating: 4.2,
//     productImage: "",
//   },
// ];

// Set (built-in object in js): store unique value

// creating a set object
const mySet = new Set();

//remove duplicate from an array
const colors = ["pink", "red", "blue", "orange", "purple", "orange", "pink"];
const colorSet = new Set(colors);
console.log(colorSet); //object

// convert set to array
console.log(Array.from(colorSet));

// adding & removing elements
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);

console.log(mySet);

mySet.delete(4);
console.log(mySet);

// remove all the elements
// mySet.clear();
// console.log(mySet);

// check if an element exist
console.log(mySet.has(5)); //return true, if it exists
console.log(colorSet.has("pink"));

console.log(mySet.size);

// iterate over set
for (var ele of mySet) {
  console.log(ele); //1 2 3 5
}

// Map (in-built javascript object): stores data in key-value pair, it can store key of any datatype
const myMap = new Map();

// to add key/value pair to map
myMap.set("name", "alex");
myMap.set("age", 20);
myMap.set("city", "hyderabad");

console.log(myMap);

// to delete a property from map
myMap.delete("age");
console.log(myMap);

// myMap.clear();
// console.log(myMap);

console.log(myMap.size);

// to check if key exist
console.log(myMap.has("city"));

// get the value
console.log(myMap.get("city"));

// iterate over map
for (var [key, value] of myMap) {
  console.log(key + " : " + value);
}

// convert map to array
console.log(Array.from(myMap)); //[["name", "alex"], ["city", "hyderabad"]]

// 2D Array
// to add elements
var arr = [];
arr.push([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(arr); //[[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// to access elements (consider 0th row & column) ([row][column])
console.log(arr[1][1]);

//update
arr[1][1] = 100;

// remove
arr.pop();
console.log(arr);

// iteration (nested loops)
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// JSON (cover after functions)

// task
// extract first five letters from a string (' gfuh ieiuei ')
// get the length of a string and make it uppercase ('hduej dij')
// take a string, make it lowercase and trim it ('   biji jdo   ')
// replace a specified word in a string ('', '')
// random statements in implicit coercion e.g. (89  + 'hello' + 90 / 9)
// revise type of each datatype
// create an object for animal, book
// find the duplicate in a string() (use array)
// reverse a string (use array method)
// find the highest and lowest value in array -loops
// display first 3 elements in an array in console using loops [1,3, 4, 10, 20]
// remove 4th (index) element and add 2 element there [1,3, 4, 10, 20, 100]
