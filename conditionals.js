//if//else statements

let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//else if statements

let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F")
}

//loops

//for loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration: " + i);
}

let arrOfNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("Names in the TECHCRUSH:");
for (let i = 0; i < arrOfNames.length; i++) {
    console.log(arrOfNames[i]);
}

// 2 Times Table (0 to 12)
for (let x = 0; x <= 12; x++) {
    console.log(x * 2);
}

// 3 Times Table (0 to 12)
for (let x = 0; x <= 12; x++) {
    console.log(x * 3);
}

// 4 Times Table (0 to 12)
for (let x = 0; x <= 12; x++) {
    console.log(x * 4);
}

//while loop
let loginAttempts = 0;
while (loginAttempts < 3) {
    console.log("Login attempt: " + (loginAttempts + 1));
    loginAttempts++;
}

let loginAttempts2 = 0;
while (loginAttempts2 <= 3) {
    console.log(`Login attempt ${loginAttempts2 + 1}`);
    loginAttempts2++;
}

//loop through an array and add 20 to each score
let scores = [50, 55, 78, 44, 22];
for (let newScores = 0; newScores < scores.length; newScores++) {
    console.log(scores[newScores] + 20);
}