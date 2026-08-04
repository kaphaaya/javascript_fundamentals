// ==========================================
// 1. FUNCTIONS WITH PARAMETERS
// ==========================================

function welcomeMessage(name) {
    //console.log(`Welcome to Class Dev ${name}!`);
}

welcomeMessage("Alice");


// Fixed: Removed duplicate 'let x' and 'let y' declarations.
// Added default parameters (0) to prevent NaN when called without arguments.
function add(x = 0, y = 0) {
    return x + y; 
}

//console.log(add()); // Output: 0


function addition(x, y) {
    return x + y;
}

//console.log(addition(5, 10)); // Output: 15


// ==========================================
// 2. RETURNING VALUES VS LOGGING
// ==========================================

// Option A: Log directly inside the function (call without console.log)
function greetings(name) {
    //console.log("Hello, " + name + "!");
}

greetings("Alice"); // Output: Hello, Alice!

// Option B: Return a string (cleaner for scalable code)
function getGreeting(name) {
    return `Hello, ${name}!`;
}

//console.log(getGreeting("Alice")); // Output: Hello, Alice!


// ==========================================
// 3. GLOBAL SCOPE & CONDITIONAL LOGIC
// ==========================================

let score = 75;

// Fixed: Closed the function properly with '}'
function gradingSystem() {
    if (score >= 90) {
        return "PASSED with A";
    } else if (score >= 80) {
        return "PASSED with B";
    } else if (score >= 70) {
        return "PASSED with C";
    } else {
        return "FAILED";
    }
}

//console.log(gradingSystem()); // Output: PASSED with C


// ==========================================
// 4. ISOLATED UTILITY FUNCTIONS
// ==========================================

function deliveryFee(distance) {
    let fee = 5000;
    return fee * distance;
}

//console.log(`Delivery Fee: ₦${deliveryFee(3)}`); // Output: Delivery Fee: ₦15000


function studentScore(score) {
    if (score >= 70) {
        return "GRADE A";
    } else if (score >= 60) {
        return "GRADE B";
    } else {
        return "GRADE F";
    }
}

//console.log(studentScore(65)); // Output: GRADE B

//ARROW FUNCTION
const minus = (number) => {
return number -50
}
let result = minus(10)
;

console.log(result) // Output: -40
