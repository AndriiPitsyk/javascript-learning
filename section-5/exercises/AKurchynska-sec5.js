/*Exercise 1:
1. Write a function which will check if a user has a valid ticket ID
and does user have 18+ to enter a club.
If condition is true then print
'User is allowed to enter the club!' if false then print 'User entrance is not allowed!'
Hint: use operator *&&* to check both conditions.*/

function clubEnter(validId,age) {
    validId && age >= 18
        ? console.log('User is allowed to enter the club!')
        : console.log('User entrance is not allowed!')
}

/*2. Create a function using *||* operator to check if user position is *student*
OR a *senior* to get a discount to the course.*/

function getDiscount(userPosition) {
    userPosition == 'student' || userPosition == 'senior'
        ? console.log('You will have a discount')
        : console.log('Sorry, no discount')
}

/*Exercise 2:
What will be the result of the code bellow? Think without code execution:

const isSunny = true;
const hasSunscreen = false;

if (isSunny && hasSunscreen) {
  console.log("Go outside!");
} else {
  console.log("Stay indoors or use sunscreen.");
}*/

Stay indoors or use sunscreen.

    /*Exercise 3:
    Create a *switch* statement that checks a traffic light color (red, yellow, green)
        and logs what a driver should do.*/

    const color = 'green';

switch(color){
    case 'red':
        console.log('Stop!');
        break;
    case 'yellow':
        console.log('Stop is you can');
        break;
    case 'green':
        console.log('Go,Go,Go');
        break;
    default:
        console.log('Oops! Use priority rules');
}

/*Exercise 4:
Create a function which will check a student’s score
is A (90+), B (80-89), C (70-79), D (60-69) and return a score from function;
In this exercises please use *if/else if/ else* statements and logical operators.*/

let score ;
function studentScore(points) {
    if(points >= 90) {
        score = 'A';
    }
    else if (points >= 80 && points < 90) {
        score = 'B';
    }
    else if (points >= 70 && points < 80){
        score = 'C';
    }
    else if (points >= 60 && points < 70){
        score = 'D';
    }
    else{
        score = 'F'
    }

    return score;
}


/*Exercise 5:
What will be the result of the code bellow? Think without code execution

const username = "";
if (username) {
  console.log("User exists");
} else {
  console.log("No user found");
}*/

No user found

/*Exercise 6:
Rewrite the following if-else statement using a ternary operator:

const temp = 30;
if (temp > 25) {
  console.log("Hot day");
} else {
  console.log("Cool day");
}*/

temp > 25 ? console.log("Hot day") : console.log("Cool day");


/*Exercise 7:
What will be the result of the code bellow? Think without code execution:

const isAdult = false;
if(!isAdult) {
    console.log('Truthy')
} else {
    console.log('Falsy')
}*/

Truthy

/*Exercise 8:
1. What will be the result of the code bellow? Think without code execution:
const points = 0;
console.log(points || 100 );*/

100

/*2. What will be the result of the code bellow? Think without code execution:
const username = "";
console.log(username && "Guest");*/

""

/*3.What will be the result of the code bellow? Think without code execution:
const userCountry = null;
console.log(userCountry ?? 'USA');*/

USA

/*Exercise 9:
What will be the result of the code bellow? Think without code execution:

function getUserData(userData) {
    return {
        name: userData.name || 'Default value',
        year: userData.year || 2005,
    }
}

console.log(getUserData({name: 'Test user'}));
console.log(getUserData({year: 2005}));
console.log(getUserData({}));*/

{ name: 'Test user', year: 2005 }
{ name: 'Default value', year: 2005 }
{ name: 'Default value', year: 2005 }

/*Exercise 10:
Use all three logical assignment operators (||=, &&=, ??=) in one function:*/

function updateUser(user) {
    user.name = user.name || "Guest";
    user.age = user.age ?? 18;
    user.premium = user.premium && true;
    return user;
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