// for
var arr = [10, 20, 30, 40, 50];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// statement 1 & st 3 are optional
var z = 0;
for (; z <= arr.length; ) {
  console.log(arr[z]);
  z++;
}

// while (shorter syntax)
// syntax

// while(condition) {
// block of code
// }

var j = 0;
while (j <= 10) {
  console.log(j); //0 1 ... 10
  j++;
}

// do while
// do {
//   block of code
// } while (condition);

var a = 0;
do {
  console.log(a); //0
  a++; //1
} while (a > 4);

// String ('' or ""): string are immutable
// index/position start from 0 and every character has a position
var firstName = "alina";
console.log("length is: " + firstName.length); //5

var str =
  "  front-end development: html, css, js are the building block of front-end   ";

console.log(str.length); //77

// find
console.log(str.indexOf("end")); //return the index of the first occurence of the specified word
console.log(str.indexOf("end", 10)); //(optional) 10 means: start searching after 10th index
console.log(str.lastIndexOf("end")); //return the index of the last occurence of the specified word
console.log(str.search("end")); //return the index of the first occurence of the specified word
console.log(str.search("geufh")); //-1 (if specified word doesn't exist)
console.log(str.startsWith("front")); //return boolean
console.log(str.endsWith("front")); //return boolean
console.log(str.includes("development")); //check for a string value in between string

// extraction
console.log(str.slice(2, 15)); //return a string with 2nd index till 14th index
console.log(str.slice(7)); //return string from 7th till last
console.log(str.substring(-10, 20)); //negative are allowed
console.log(str.substring(-1)); //return complete string

console.log(str.replace("end", "END")); //(word to be replaced, word to be replaced with)
console.log(str.replaceAll("end", "END"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim()); //remove leading & traling spaces
console.log(str.charAt(20)); //return character at 20th index

// if("admin@gmail.com".toLowerCase() == "  ADMIN@gmail.com".toLowerCase().trim()) {
// }

// Arrays
var color = ["pink", "red", "blue", "green", "orange"]; //arrays of string
var num = [10, 30, 20, 1, 32, 20]; //arrays of number
var mix = [undefined, {}, [], null, true, false];

// index starts from 0
console.log(color[2]); //blue
console.log(typeof color); //object

//verification of array
console.log(Array.isArray(num)); //return true, if variable array

// null, object, array -> object
// if(num == null) {}

// isNaN();

// add/remove array element from an array
//push, pop
num.push(10, 100, 200); //add new element in the end
console.log(num);

num.pop(); ///remove a element from the end
num.pop();
console.log(num);

//shift, unshift
num.unshift(100, 200, 300); //add new element at the start
console.log(num);

num.shift(); //remove a element from the start
num.shift();
console.log(num);

// splice: add & remove element in between of the array
// ["pink", "red","blue", "green", "orange"]
color.splice(1, 2, "white"); //start of the index, number of elements to be deleted, new elements to be added(optional)
console.log(color);

// deleting only red & green in original color array
// color.splice(1, 1);
// color.splice(2, 1);

// delete
var sample = ["pink", "red", "blue", "green", "orange"];
sample.splice(2, 2);
console.log(sample);

// add
sample.splice(1, 0, "white", "teal");
console.log(sample);

// slice
console.log(num.slice(1, 5)); //array elements from 1st till 4th index

// concat()
console.log(num.concat(mix, color));

// reverse
num.reverse();
console.log(num);

console.log(num.includes(100));
console.log(num.indexOf(10));
console.log(num.lastIndexOf(10));

// array to string(join)
console.log(num.join()); //"10,20,32,1,20,30,10,300"
console.log(num.join("*"));
console.log(num.join(""));

// string to array (split)
var strVal = "hello-world-hi";
console.log(strVal.split("-"));

var strData = "hello world";
console.log(strData.split(" "));
console.log(strData.split(""));

// Try: reverse a string
