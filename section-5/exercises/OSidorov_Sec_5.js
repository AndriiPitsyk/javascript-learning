// Exercise 1:
// 1.
const validID = true;
const validAge = false;
if (validID && validAge) {
    console.log('User is allowed to enter the club!');
} else {
    console.log('User entrance is not allowed!');
}
// 2.
const isStudent = false;
const isSenior = true;
if (isStudent || isSenior) {
    console.log('User can get discount to the course.');
} else {
    console.log('User cannot get discount to the course.');
}

// Exercise 2:
// const isSunny = true;
// const hasSunscreen = false;
// if (isSunny && hasSunscreen) {
//     console.log("Go outside!");
// } else {
//     console.log("Stay indoors or use sunscreen.");
// }
"Stay indoors or use sunscreen."

// Exercise 3:
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

// Exercise 4:
function getScore(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else {
        return 'Incorrect value';
    }
}
console.log(getScore());
console.log(getScore(-999));
console.log(getScore(999));
console.log(getScore(83));

// Exercise 5:
//     const username = "";
//     if (username) {
//         console.log("User exists");
//     } else {
//         console.log("No user found");
//     }
"No user found"

// Exercise 6:
// const temp = 30;
// if (temp > 25) {
//     console.log("Hot day");
// } else {
//     console.log("Cool day");
// }
const temp = 30;
temp > 25 ? console.log('Hot day') : console.log('Cool day')

// Exercise 7:
//         const isAdult = false;
//     if(!isAdult) {
//         console.log('Truthy')
//     } else {
//         console.log('Falsy')
//     }
'Truthy'

// Exercise 8:
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

// Exercise 9:
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

// Exercise 10:
function updateUser(user) {
    // My code start
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