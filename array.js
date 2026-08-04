//array is a data structure that can hold multiple values in a single variable. It is a collection of elements, where each element can be of any data type, such as numbers, strings, or objects. Arrays are commonly used in programming to store and manipulate lists of data.
//example of an array in JavaScript:  
//creating an array of numbers
//const numbers = [1, 2, 3, 4, 5];
//creating an array of strings
//const fruits = ["apple", "banana", "orange"];
//creating an array of mixed data types
//const mixedArray = [1, "hello", true, { name: "John" }, [1, 2, 3]];

let students = ["john", "sarah", "mike", "emily", "david", "sophia", "alex", "olivia", "ethan", "ava"];
//console.log(students[0]); // Output: [john, sarah, mike, emily, david, sophia, alex, olivia, ethan, ava]
//console.log(students.length); // Output: 10

//adding element to an array
students.push("lily"); // adds "lily" to the end of the array
//console.log(students); // Output: [john, sarah, mike, emily, david, sophia, alex, olivia, ethan, ava, lily]

students.unshift("james"); // adds "james" to the beginning of the array
//console.log(students); // Output: [james, john, sarah, mike, emily, david, sophia, alex, olivia, ethan, ava, lily]

//removing element from an array
students.pop(); // removes the last element from the array

//includes() method checks if an array contains a certain element and returns true or false accordingly.
//console.log(students.includes("mike")); // Output: true
//console.log(students.includes("lily")); // Output: false

//indexOf() method returns the index of the first occurrence of a specified element in an array. If the element is not found, it returns -1.
//console.log(students.indexOf("sarah")); // Output: 2
//console.log(students.indexOf("lily")); // Output: -1

//slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
const newStudents = students.slice(2, 5); // creates a new array with elements from index 2 to 4
//console.log(newStudents); // Output: [sarah, mike, emily]

//splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
students.splice(3, 2, "linda", "james"); // removes 2 elements starting from index 3 and adds "linda" and "james"
//console.log(students); // Output: [james, john, sarah, linda, james, david, sophia, alex, olivia, ethan, ava]

//reverse() method reverses the order of the elements in an array in place. The first array element becomes the last, and the last array element becomes the first.
students.reverse(); // reverses the order of the elements in the array
//console.log(students); // Output: [ava, ethan, olivia, alex, sophia, david, james, linda, sarah, john, james]

//sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.
students.sort(); // sorts the elements of the array in ascending order
//console.log(students); // Output: [alex, ava, david, ethan, james, james, john, linda, olivia, sarah, sophia]

//higher-order functions are functions that take other functions as arguments or return functions as their result. They are commonly used in JavaScript for array manipulation and functional programming. Some examples of higher-order functions in JavaScript include map(), filter(), reduce(), forEach(), and sort().  
//accepts functions as parameters and returns a new function or value. They are commonly used in JavaScript for array manipulation and functional programming. Some examples of higher-order functions in JavaScript include map(), filter(), reduce(), forEach(), and sort().    
//performs an operation on each element of an array and returns a new array with the results. It does not modify the original array.

//map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(num) {
  return num * num;
});
//console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

const marketList = ["apple", "banana", "orange", "grape", "kiwi"];
const upperCaseList = marketList.map(function(item) {
  return "I will buy: " + item  ;
});
//console.log(upperCaseList); // Output: ["I will buy: apple", "I will buy: banana", "I will buy: orange", "I will buy: grape", "I will buy: kiwi"]

//filter() method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
//console.log(evenNumbers); // Output: [2, 4]

const complexion = ["fair", "medium", "dark", "olive", "tan"];
const darkComplexion = complexion.filter(function(item) {
  return item === "dark";
});
//console.log(darkComplexion); // Output: ["dark"]

//reduce() method executes a reducer function on each element of the array, resulting in a single output value. It does not modify the original array.
const sum = numbers.reduce(function(accumulator, num) {
  return accumulator + num;
}, 0);
//console.log(sum); // Output: 15

const numbs = [10, 20, 30, 40, 50];
const total = numbs.reduce(function(accumulator, num) {
  return accumulator + num;
}, 0);
//console.log(total); // Output: 150

const numbers = [1, 2, 3, 4, 5]; 
const totalSum = numbers.reduce(function(accumulator, num , index) {
  return accumulator * num;
}, 1);
//console.log(totalSum); // Output: 120

//forEach() method executes a provided function once for each array element. It does not return a new array and does not modify the original array.
marketList.forEach(function(item) {
  console.log("I will buy: " + item);   
});

//find() method returns the value of the first element in the array that satisfies the provided testing function. It does not modify the original array.
const foundItem = marketList.find(function(item) {
  return item === "orange";
});
//console.log(foundItem); // Output: "orange"

//findIndex() method returns the index of the first element in the array that satisfies the provided testing function. It does not modify the original array.If no elements satisfy the testing function, it returns -1.  
const foundIndex = marketList.findIndex(function(item) {
  return item === "orange";
});
//console.log(foundIndex); // Output: 2

const findIndexOfDarkComplexion = complexion.findIndex(function(item) {
  return item === "dark";
});
//console.log(findIndexOfDarkComplexion); // Output: 2

//some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value and does not modify the original array.
const hasEvenNumber = numbers.some(function(num) {
  return num % 2 === 0;
});
//console.log(hasEvenNumber); // Output: true   
//every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value and does not modify the original array.

