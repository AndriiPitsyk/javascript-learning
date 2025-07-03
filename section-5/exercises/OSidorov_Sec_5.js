/* Exercise 1:
1. Write a function which will check if a user has a valid ticket ID and does user have 18+ to enter a club.
If condition is true then print 'User is allowed to enter the club!' if false then print 'User entrance is not allowed!'
Hint: use operator *&&* to check both conditions.
2. Create a function using *||* operator to check if user position is *student* OR a *senior* to get a discount to the course.
 */
// 1.
function checkAccess(validID, validAge) {
    if (validID && validAge >= 18) {
        console.log('User is allowed to enter the club!');
    } else {
        console.log('User entrance is not allowed!');
    }
}
checkAccess('ABC123', 10);
// 2.
function discount(position) {
    if (position === 'student' || position === 'senior') {
        console.log('User can get discount to the course.');
    } else {
        console.log('User cannot get discount to the course.');
    }
}
discount('student');

/* Exercise 2:
What will be the result of the code bellow? Think without code execution:
 */
// const isSunny = true;
// const hasSunscreen = false;
// if (isSunny && hasSunscreen) {
//     console.log("Go outside!");
// } else {
//     console.log("Stay indoors or use sunscreen.");
// }
"Stay indoors or use sunscreen."

/* Exercise 3:
Create a *switch* statement that checks a traffic light color (red, yellow, green) and logs what a driver should do.
 */
const trafficLightColor = 'red';
switch (trafficLightColor) {
    case 'red':
        console.log('STOP!');
        break;
    case 'yellow':
        console.log('BE READY TO STOP!');
        break;
    case 'green':
        console.log('GO!GO!GO!');
        break;
}

/* Exercise 4:
Create a function which will check a student’s score is A (90+), B (80-89), C (70-79), D (60-69) and return a score from function;
In this exercises please use *if/else if/ else* statements and logical operators.
 */
function getScore(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'Incorrect value';
    }
}
console.log(getScore());
console.log(getScore(-999));
console.log(getScore(999));
console.log(getScore(83));

/* Exercise 5:
What will be the result of the code bellow? Think without code execution
 */
//     const username = "";
//     if (username) {
//         console.log("User exists");
//     } else {
//         console.log("No user found");
//     }
"No user found"

/* Exercise 6:
Rewrite the following if-else statement using a ternary operator:
 */
// const temp = 30;
// if (temp > 25) {
//     console.log("Hot day");
// } else {
//     console.log("Cool day");
// }
const temp = 30;
temp > 25 ? console.log('Hot day') : console.log('Cool day');

/* Exercise 7:
What will be the result of the code bellow? Think without code execution:
 */
//         const isAdult = false;
//     if(!isAdult) {
//         console.log('Truthy')
//     } else {
//         console.log('Falsy')
//     }
'Truthy'

/* Exercise 8:
1. What will be the result of the code bellow? Think without code execution:
2. What will be the result of the code bellow? Think without code execution:
3.What will be the result of the code bellow? Think without code execution:
 */
// 1.
//     const points = 0;
//     console.log(points || 100 );
100
// 2.
//     const username = "";
//     console.log(username && "Guest");
""
//  3.
//     const userCountry = null;
//     console.log(userCountry ?? 'USA');
'USA'

/* Exercise 9:
What will be the result of the code bellow? Think without code execution:
 */
// function getUserData(userData) {
//     return {
//         name: userData.name || 'Default value',
//         year: userData.year || 2005,
//     }
// }
// console.log(getUserData({name: 'Test user'}));
'Test user', 2005
// console.log(getUserData({year: 2005}));
'Default value', 2005
// console.log(getUserData({}));
'Default value', 2005

/* Exercise 10:
Use all three logical assignment operators (||=, &&=, ??=) in one function:
 */
function updateUser(user) {
   // My code startd
   user.name ||= 'Guest';
   user.age ??= 18;
   user.premium &&= true;
   // My code end
}
const userOne = { name: "", age: null, premium: true };
const userTwo = { name: "Alice", age: 25, premium: false };
updateUser(userOne);
updateUser(userTwo);
console.log(userOne);
/* Expected Output:
{ name: "Guest", age: 18, premium: true }
*/
console.log(userTwo);
/* Expected Output:
{ name: "Alice", age: 25, premium: false }
*/