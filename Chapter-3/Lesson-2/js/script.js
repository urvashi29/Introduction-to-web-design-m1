// Arithmetic
var num = 10;
var numTwo = 20;

// num, numTwo -> operand
var add = num + numTwo; //addition
console.log(add);
console.log(numTwo - num); //subtraction
console.log(numTwo / num); //divide (divisor)
console.log(numTwo % num); //modulus (remainder)
console.log(num * numTwo); //multiply
console.log(num ** 2);//10 * 10

// increment & decrement
num++; //num = num + 1;
numTwo--; //numTwo = numTwo - 1
console.log(num, numTwo);

// Opeartor Precedence (priority of operator)
// * /
// + -
// L -> R

var solve = 10 + (78 * 10) / 10;
console.log(solve);

// Assignment Operator (=)
var val = 20; //assignment operator
val += 5; //val = val + 5;
val -= 5; //val = val - 5
val /= 5;
val %= 5;

// String Operator (only "+" works)
var str = "hello";
var strTwo = "world";
console.log(str + strTwo); //"helloworld"
console.log(str / strTwo); //NaN (not a number)

console.log("hello" + 100);
console.log(20 - 2 + "hello");
console.log(20 + str + 20); //
console.log(20 * 20 + "hello"); //
console.log("hello" + 20 - 20); //NaN
console.log("20" / 2); //10
console.log(10 - ""); //10
console.log("20" + 10);

// Implicit coersion: automatic type conversion

// numeric string: "798090"
// non-numeric string: "hyijok80ioekd9e0oe"
// alpha string: "hygfujro"

// Rule
// Check operator precendence
// Check type of operand:
// 1. If either operand is string and "+" is present, concatenate
// 2. If either of operand is string and "+" is not present, check the type of string
//           If string numeric, consider it as number, same for boolean otherwise result is NaN

// Comparison opeartor
var x = 6;
var y = "6";

console.log(x == y); //compare the value
console.log(x === y); //compare value & datatype (strict checking)
console.log(x != y); //compare only value
console.log(x !== y); //compare value & datatype (strict checking)
console.log(x > 10);
console.log(y <= 10);

// Logical Opeartor (&& , ||, !)
console.log(x == y && x === y); //return true if all the are true, otherwise false
console.log(x == y || x === y); //retuurn true if either condition is true
console.log(!(x == y)); //reverse the inner result

console.log(typeof y);

// Explicit coersion
var a = 20;
var b = 20.78;
console.log(typeof a);
console.log(typeof b);

// convert number to string
console.log(a.toString()); //"20"
console.log(a.toFixed(2));
("20.00");

// convert string to number
console.log(Number("60")); //60
console.log(Number("heueo")); //NaN
console.log(Number("78e8hckd")); //NaN
console.log(Number("")); //0
console.log(parseInt("80.879")); //80
console.log(parseFloat("70.998fhur")); //70.988

//convert boolean to number & string
console.log(true.toString()); //"true"
console.log(Number(true)); //1
console.log(Number(false)); //0

// null
var c = null;
console.log(c); //null
console.log(typeof c); //object

// undefined
var d;
console.log(d); //undefined
console.log(typeof d); //undefined

// Practice Questions
console.log(true > false); //true
console.log(false == null); //false
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(true + false > 2); //false
console.log(true || false); //true
console.log(false || false); //false

// return the first truth value
console.log(1 || 0); //
console.log(null || 1); //1
console.log(null || 0 || 1); //1
console.log(undefined || null | 0); //0

// return the first falsy value
console.log(1 && 0); //0
console.log(null && 5); //null
console.log(1 && 2 && null); //null
console.log(1 && 2 && 3); // (last value is returned)

console.log(!0); //true
console.log(!null); //true
