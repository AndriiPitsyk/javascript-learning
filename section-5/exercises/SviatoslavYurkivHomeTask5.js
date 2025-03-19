// Exercise 1:
// 1. Write a function which will check if a user has a valid ticket ID and does user have 18+ to enter a club.
//If condition is true then print 'User is allowed to enter the club!' if false then print 'User entrance is not allowed!'
// Hint: use operator *&&* to check both conditions.

const userAccess = function (ticketId, age) {
    if (ticketId > 0 && age >= 18) {
        console.log(`User with ${ticketId} and ${age} is allowed to enter the club!`);
    } else {
        console.log(`User with ticket ID: ${ticketId} and Age: ${age} is NOT allowed to enter the club!`);
    }
}
userAccess(1, 2)

//2. Create a function using *||* operator to check if user position is *student* OR a *senior* to get a discount to the course.
const courseDiscount = function (position) {
    if (position === "student" || position === "senior") {
        console.log(`course is WITH discount for ${position}`);
    } else {
        console.log(`course is WITHOUT discount for ${position}`);
    }
}
courseDiscount("student");
courseDiscount("senior");
courseDiscount("Sviat");
courseDiscount(1323131)
courseDiscount("")

// Exercise 2:
// What will be the result of the code bellow? Think without code execution:
//
//     const isSunny = true;
// const hasSunscreen = false;
//
// if (isSunny && hasSunscreen) {
//     console.log("Go outside!");
// } else {
//     console.log("Stay indoors or use sunscreen.");
// }
console.log("Stay indoors or use sunscreen.");

// Exercise 3:
// Create a *switch* statement that checks a traffic light color (red, yellow, green) and logs what a driver should do.
// Switch
const color = "red"
switch (color) {
    case  "red":
        console.log(`Stop!`);
        break;
    case "green":
        console.log(`Go!`);
        break;
    case "yellow":
        console.log(`Slow down!`);
        break;
    default:
        console.log("No trafficLight found");
}

// Function + Switch
function trafficLightAction(color) {
    switch (color) {
        case  "red":
            console.log(`Stop!`);
            break;
        case "green":
            console.log(`Go!`);
            break;
        case "yellow":
            console.log(`Slow down!`);
            break;
        default:
            console.log("No trafficLight found");
    }
}

trafficLightAction("red")
trafficLightAction("green")
trafficLightAction("yellow")


//Exercise 4:
// Create a function which will check a student’s score is A (90+), B (80-89), C (70-79), D (60-69) and return a score from function;
// In this exercises please use *if/else if/ else* statements and logical operators.
function studentScore(score) {
    if (score > 89) {
        console.log(`Student score is ${score} and it is A`);
    } else if (score >= 80) {
        console.log(`Student score is ${score} and it is B`);
    } else if (score >= 70) {
        console.log(`Student score is ${score} and it is C`);
    } else if (score >= 60) {
        console.log(`Student score is ${score} and it is D`);
    } else {
        console.log(`Bad student his score is ${score}`);
    }
}

studentScore(50);

//Exercise 5:
// What will be the result of the code bellow? Think without code execution
//
// const username = "";
// if (username) {
//   console.log("User exists");
// } else {
//   console.log("No user found");
// }
console.log("No user found");


//Exercise 6:
// Rewrite the following if-else statement using a ternary operator:
// const temp = 30;
// if (temp > 25) {
//   console.log("Hot day");
// } else {
//   console.log("Cool day");
// }
const temp = 30;
temp > 25 ? console.log("Hot day") : console.log("Cool day");

//Exercise 7:
// What will be the result of the code bellow? Think without code execution:
// const isAdult = false;
// if(!isAdult) {
//     console.log('Truthy')
// } else {
//     console.log('Falsy')
// }
console.log('Truthy')

//Exercise 8:
// 1. What will be the result of the code bellow? Think without code execution:
// const points = 0;
// console.log(points || 100 );
//100
//
// 2. What will be the result of the code bellow? Think without code execution:
// const username = "";
// console.log(username && "Guest"); // show nothing cuz (= "" // falsy) and it should be true && true
// Answer Empty string
//
// 3.What will be the result of the code bellow? Think without code execution:
// const userCountry = null;
// console.log(userCountry ?? 'USA');
// USA

// Exercise 9:
// What will be the result of the code bellow? Think without code execution:

//     function getUserData(userData) {
//         return {
//             name: userData.name || 'Default value',
//             year: userData.year || 2005,
//         }
//     }
//
// console.log(getUserData({name: 'Test user'})); answer { name: 'Test user', year: 2005 }
// console.log(getUserData({year: 2005})); answer { name: 'Default value', year: 2005 }
// console.log(getUserData({})); answer { name: 'Default value', year: 2005 }


//Exercise 10:
// Use all three logical assignment operators (||=, &&=, ??=) in one function:
// function updateUser(user) {
//   // Your code here
// }
// const userOne = { name: "", age: null, premium: true };
// const userTwo = { name: "Alice", age: 25, premium: false };
// updateUser(userOne);
// updateUser(userTwo);
// console.log(userOne);
// /* Expected Output:
// { name: "Guest", age: 18, premium: true }
// */
//
// console.log(userTwo);
// /* Expected Output:
// { name: "Alice", age: 25, premium: false }
// */


function updateUser(user) {
    user.name ||= "Guest";
    user.age ??= 18;
    user.premium &&= true;
}

const userOne = {name: "", age: null, premium: true};
const userTwo = {name: "Alice", age: 25, premium: false};

updateUser(userOne);
console.log(userOne);
updateUser(userTwo);
console.log(userTwo);