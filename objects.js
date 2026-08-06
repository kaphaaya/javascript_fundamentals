// Objects in JavaScript are used to store multiple values in a single variable. They are a collection of key-value pairs, where each key is a string (or symbol) and each value can be any data type, including other objects or functions.
//separate keys and values with a colon (:), and separate key-value pairs with commas (,). Objects are commonly used in programming to represent real-world entities and their properties.
const obj = {
  name: "AZIZ OLAIDE KAFAYAT",
  age: 20, //key-value pair
  occupation: "Student",
  country: "Nigeria",
  state: "Lagos",
  city: "Ikeja",
  hobbies: ["Reading", "Writing", "Coding"],
  education: {
    degree: "Bachelor's",
    major: "Computer Science",
    university: "University of Lagos"
  },
  gender: "Female"
}

//dot notation is used to access the value of a property in an object. It uses the dot (.) operator followed by the name of the property you want to access.
//console.log(obj.name); // Output: AZIZ OLAIDE KAFAYAT
//console.log(obj.age); // Output: 20

let person = {
  firstName: "AZIZ",
  lastName: "OLAIDE",
  age: 20,
  occupation: "Student",
  country: "Nigeria",
  state: "Lagos",
}

delete person.age; // deletes the age property from the person object
//console.log(person.age); // Output: undefined


person.lastName = "AZIZ" // updates the value of the lastName property to "AZIZ"
//console.log(person.lastName); // Output: AZIZ
//the object name cannotbe changed but the values of the properties can be changed when its const. The object itself is still mutable, meaning you can change its properties and values, but you cannot reassign the object to a new value.

//destructuring is a feature in JavaScript that allows you to extract values from objects or arrays and assign them to variables in a more concise way. It uses a syntax that resembles the structure of the object or array being destructured.
//with object destructuring, you can extract values from an object and assign them to variables with the same name as the object properties. This can make your code more readable and easier to work with, especially when dealing with complex objects or nested data structures.
const { firstName, lastName, age, occupation, country, state } = person;
//console.log(firstName); // Output: AZIZ
//console.log(lastName); // Output: AZIZ
//console.log(age); // Output: undefined
//console.log(occupation); // Output: Student
//console.log(country); // Output: Nigeria
//console.log(state); // Output: Lagos

//without destructuring, you would have to access each property individually using dot notation, which can be more verbose and harder to read. For example:
//console.log(person.firstName); // Output: AZIZ
//console.log(person.lastName); // Output: AZIZ
