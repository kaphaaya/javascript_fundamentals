console.log("Hello, World!");


//Strings
/**
 * Strings are used to represent text. They are a sequence of characters enclosed in single quotes, double quotes, or backticks.  
 * They can be concatenated using the + operator or template literals.
 * Strings can be manipulated using various methods such as length, toUpperCase(), toLowerCase(), slice(), substring(), and more.
 */

//Numbers
/**
 * Numbers are used to represent numeric values. They can be integers or floating-point numbers.
 * JavaScript provides various arithmetic operators such as +, -, *, /, and % for performing calculations.
 * Numbers can also be manipulated using methods like toFixed(), toPrecision(), and Math object methods.
 */
let integer = 42; // Integer
let float = 3.14; // Floating-point number
let sum = integer + float; // Addition
let difference = integer - float; // Subtraction
let product = integer * float; // Multiplication
let quotient = integer / float; // Division
let remainder = integer % float; // Modulus
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

//Booleans    
const isTrue = true; // Boolean value true
const isFalse = false;

let test  = 5
console.log(typeof test);

undefined; // Represents a variable that has been declared but not assigned a value
let myVariable; // Declared but not assigned
console.log(typeof myVariable);

null; // Represents the intentional absence of any object value
let myNullVariable = null; // Assigned null value
console.log(typeof myNullVariable); // Outputs "object" due to a historical quirk in JavaScript

array; // Represents a collection of elements, which can be of any type
let myArray = [1, 2, 3, "four", true]; // An array containing numbers, a string, and a boolean
console.log(myArray); // Outputs the entire array
console.log(myArray[0]); // Accessing the first element of the array
console.log(myArray.length); // Outputs the length of the array