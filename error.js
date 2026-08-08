
//Types of Errors in JavaScript
//1. Syntax Errors: These occur when there is a mistake in the syntax of the code, such as a missing bracket or semicolon. They prevent the code from running and are usually caught by the JavaScript engine during parsing.
let x = 10 //SyntaxError: missing semicolon  


//2. Reference Errors: These occur when you try to access a variable or function that has not been defined or is out of scope. They indicate that the code is trying to reference something that does not exist.
//let y = z + 5; //ReferenceError: z is not defined

//3. Type Errors: These occur when you try to perform an operation on a value of the wrong type, such as calling a method on a non-object or trying to assign a value to a constant variable. They indicate that the code is trying to use a value in an unexpected way.
const num = 10;
//num.toUpperCase(); //TypeError: num.toUpperCase is not a function

//4. Range Errors: These occur when you try to use a value that is outside the range of acceptable values for a particular operation, such as passing a negative number to a function that expects a positive number. They indicate that the code is trying to use a value that is not valid for the operation being performed.
//et arr = new Array(-1); //RangeError: Invalid array length   
try {
  let arr = new Array(-1);
} catch (error) {
 // console.error("An error occurred:", error.message);
} 


//5. Eval Errors: These occur when there is an error in the eval() function, which is used to execute code represented as a string. They indicate that the code being evaluated is not valid or cannot be executed.
const code = "console.log('Hello, world!')";
try {
  eval(code);
} catch (error) {
  console.error("An error occurred:", error.message);
}

//6. URI Errors: These occur when there is an error in encoding or decoding a URI (Uniform Resource Identifier), such as passing an invalid character to the encodeURI() or decodeURI() functions. They indicate that the code is trying to use a URI in an invalid way.
let uri = "https://example.com/invalid uri";
try {
  let encodedUri = encodeURI(uri);
  console.log(encodedUri);
} catch (error) {
  console.error("An error occurred:", error.message);
}

//Example of using try-catch-finally to handle errors in JavaScript
try {  // code that may throw an error
  let result = 10 / 0;
  console.log(result);
} catch (error) {  // code to handle the error
  console.error("An error occurred:", error.message);
} finally {  // code that will always run, regardless of whether an error occurred or not
  console.log("This code will always run.");
}

try {
  const arr = undefined;
  const result = arr.map((item) => item * 2);
  console.log(result);
} catch (error) {
  // code to handle the error
  console.error("An error occurred:", error.message);
}

 //error.name: This property returns the name of the error, such as "TypeError" or "ReferenceError". It can be useful for identifying the type of error that occurred and handling it appropriately.
try {
  const num = 10;
  num.toUpperCase(); // This will throw a TypeError
} catch (error) {
  console.error("An error occurred:", error.name, "-", error.message);
} 

//error.message: This property returns a string that describes the error that occurred. It can provide additional information about the error and help with debugging.
try {
  const arr = undefined;
  const result = arr.map((item) => item * 2); // This will throw a TypeError
} catch (error) {
  console.error("An error occurred:", error.message);
} 

//error.stack: This property returns a string that contains the stack trace of the error, which shows the sequence of function calls that led to the error. It can be useful for debugging and identifying where the error occurred in the code.
try {
  const arr = undefined;
  const result = arr.map((item) => item * 2); // This will throw a TypeError
} catch (error) {
  console.error("An error occurred:", error.stack);
} 

loadUserData()
  .then((data) => {
    console.log("User data loaded:", data);
  })
  .catch((error) => {
    console.error("An error occurred while loading user data:", error.message);
  });

  loadUserData(5); // This will throw an error because the user ID is not valid 
  loadUserData(-5); // This will throw an error because the user ID is not valid

  function loadUserData(userId) {
    console.log("Loading user data for user ID:", userId);
    try {
      if (userId <= 0) {
        throw new Error("Invalid user ID. User ID must be a positive number.");
      }
      // Simulate loading user data from an API or database
      return Promise.resolve({ id: userId, name: "John Doe" });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  //registerStudent(John Doe, 20, "Computer Science"); // This will throw an error because the name is not a string
  //registerStudent("John Doe", -20, "Computer Science"); // This will throw an error because the age is not a positive number

  function registerStudent(name, age, major) {
    console.log("Registering student:", name, age, major);
    try {
      if (typeof name !== "string") {
        throw new Error("Invalid name. Name must be a string.");
      }
      if (age <= 0) {
        throw new Error("Invalid age. Age must be a positive number.");
      }
      if (typeof major !== "string") {
        throw new Error("Invalid major. Major must be a string.");
      }
      // Simulate registering the student in a database
      return Promise.resolve({ name, age, major });
    } catch (error) {
      return Promise.reject(error);
    }
  } 