// Exercise 1:
// 1. Write a function which will check if a user has a valid ticket ID and does user have 18+ to enter a club.
// If condition is true then print 'User is allowed to enter the club!' if false then print 'User entrance is not allowed!'
// Hint: use operator *&&* to check both conditions.
function checkingUserAgeAndIdTicket(ticketID, userAge){
    if (ticketID === 'Yes' && userAge >=18){
        console.log("User entrance is allowed!");
    } else {
        console.log("User entrance is not allowed!");
    }
}
checkingUserAgeAndIdTicket("Yes", 18);
checkingUserAgeAndIdTicket("No", 18);
checkingUserAgeAndIdTicket("Yes", 17);

// 2. Create a function using *||* operator to check if user position is *student* OR a *senior* to get a discount to the course.
function checkingUserPosition(userPosition) {
    if (userPosition === "student" || userPosition === "senior") {
        console.log("Yo have discount");
    } else if (!userPosition) {
        console.log("we cannot check you");
    } else {
        console.log("Yo do not have discount");
    }
}

checkingUserPosition("pupil");
checkingUserPosition("senior");

// Exercise 2:
// What will be the result of the code bellow? Think without code execution:
//
// const isSunny = true;
// const hasSunscreen = false;
//
// if (isSunny && hasSunscreen) {
//     console.log("Go outside!");
// } else {
//     console.log("Stay indoors or use sunscreen.");
// }
// Answer: false - "Stay indoors or use sunscreen"

// Exercise 3:
// Create a *switch* statement that checks a traffic light color (red, yellow, green) and logs what a driver should do
const trafficLightsColour = ["Red", "Green", "Yellow"];
function checkTrafficLightsColour(colour){
    switch (colour.toLowerCase()) {
        case "red":
            console.log("STOP");
            break;
        case "green":
            console.log("GO");
            break;
        case "yellow":
            console.log("WARNING");
            break;
        default: console.log("Wrong value");
    }
}
checkTrafficLightsColour(trafficLightsColour[1]);
checkTrafficLightsColour("red");

// Exercise 4:
// Create a function which will check a student’s score is A (90+), B (80-89), C (70-79), D (60-69) and return a score from function;
// In this exercises please use *if/else if/ else* statements and logical operators.
function checkStudentScore(studentScore) {
    if (studentScore >= 90) {
        return `You got ${studentScore} points and your grade is A`;
    } else if (userScore >= 80) {
        return `You got ${studentScore} points and your grade is B`;
    } else if (userScore >= 70) {
        return `You got ${studentScore} points and your grade is C`;
    } else if (userScore >= 60) {
        return `You got ${studentScore} points and your grade is D`;
    } else {
        return `You got ${studentScore} points - more studies`;
    }

}
checkStudentScore(65);

// Exercise 5:
// What will be the result of the code bellow? Think without code execution
//
// const username = "";
// if (username) {
//     console.log("User exists");
// } else {
//     console.log("No user found");
// }
//Output: "No user found"

// Exercise 6:
// Rewrite the following if-else statement using a ternary operator:
//
//     const temp = 30;
// if (temp > 25) {
//     console.log("Hot day");
// } else {
//     console.log("Cool day");
// }
const temp = 30;

temp > 25 ? console.log("Hot day") : console.log("Cool day");

// Exercise 7:
// What will be the result of the code bellow? Think without code execution:
//
//     const isAdult = false;
// if(!isAdult) {
//     console.log('Truthy')
// } else {
//     console.log('Falsy')
// }
//Answer: Truthy

// Exercise 8:
// 1. What will be the result of the code bellow? Think without code execution:
//     const points = 0;
// console.log(points || 100 );
//Answer: 100 - we use OR points = 0 ans it is False
//
// 2. What will be the result of the code bellow? Think without code execution:
//     const username = "";
// console.log(username && "Guest");
// Answer false - nothing
//
// 3.What will be the result of the code bellow? Think without code execution:
//     const userCountry = null;
// console.log(userCountry ?? 'USA');
// Answer - USA

// Exercise 9:
// What will be the result of the code bellow? Think without code execution:
//
//     function getUserData(userData) {
//         return {
//             name: userData.name || 'Default value',
//             year: userData.year || 2005,
//         }
//     }
//console.log(getUserData({name: 'Test user'})); // { name: 'Test user', year: 2005 }
// console.log(getUserData({year: 2005}));      // { name: 'Default value', year: 2005 }
// console.log(getUserData({}));                //{ name: 'Default value', year: 2005 }




//Exercise 10:
// Use all three logical assignment operators (||=, &&=, ??=) in one function:
//
 function updateUser(user) {
     user.name ||= "Guest";
     user.age ??= 18;
     user.premium &&= true;
 }

const userOne = { name: "", age: null, premium: true };
const userTwo = { name: "Alice", age: 25, premium: false };
//
updateUser(userOne);
updateUser(userTwo);
//
console.log(userOne);
// /* Expected Output:
// { name: "Guest", age: 18, premium: true }
// */
//
console.log(userTwo);
// /* Expected Output:
// { name: "Alice", age: 25, premium: false }
// */
