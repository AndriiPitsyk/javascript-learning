console.log("--------Exercise 1.1--------");

/*Exercise 1:
1. Write a function which will check if a user has a valid ticket ID and does user have 18+ to enter a club.
If condition is true then print 'User is allowed to enter the club!' if false then print 'User entrance is not allowed!'
Hint: use operator *&&* to check both conditions.
*/

function checkUser(age, validId) {
    if (age >= 18 && validId === 'true') {
        console.log('User is allowed to enter the club!');
    } else {
        console.log('User entrance is not allowed!');
    }
}

checkUser(25, "true");
checkUser(25, "false");
checkUser(15, "true");
checkUser(15, "false");

console.log("--------Exercise 1.2--------");

//2. Create a function using *||* operator to check if user position is *student* OR a *senior* to get a discount to the course.
function checkDiscount(position) {
    if (position === 'student' || position === 'senior') {
        console.log('User has discount to the course');
    } else {
        console.log('User does not have discount to the course');
    }
}

checkDiscount('student');
checkDiscount("senior");
checkDiscount("junior");

console.log("--------Exercise 2--------");

/*Exercise 2:
What will be the result of the code bellow? Think without code execution:

const isSunny = true;
const hasSunscreen = false;

if (isSunny && hasSunscreen) {
    console.log("Go outside!");
} else {
    console.log("Stay indoors or use sunscreen.");
}*/

// Answer: Result will be "Stay indoors or use sunscreen." -> because true && false => false
// We have TRUE for && when use only true && true

console.log("--------Exercise 3 --------");

/*
Exercise 3:
Create a *switch* statement that checks a traffic light color (red, yellow, green) and logs what a driver should do.*/

function checkTrafficLight(color) {
    switch (color) {
        case 'red':
            console.log('Stop!');
            break;
        case 'yellow':
            console.log('Attention!!! Prepare to stop or drive!');
            break;
        case 'green':
            console.log('Go!');
            break;
        default:
            console.log('Wrong color! Please enter red, yellow, or green.');
    }
}

checkTrafficLight('red');
checkTrafficLight('yellow');
checkTrafficLight('green');
checkTrafficLight('orange');

console.log("--------Exercise 4 --------");

/*
Exercise 4:
Create a function which will check a student’s score is A (90+), B (80-89), C (70-79), D (60-69) and return a score from function;
In this exercises please use *if/else if/ else* statements and logical operators.*/

function checkStudentScore(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(checkStudentScore(99)); //  A
console.log(checkStudentScore(80)); //  B
console.log(checkStudentScore(76)); //  C
console.log(checkStudentScore(61)); //  D
console.log(checkStudentScore(55)); //  F

console.log("--------Exercise 5 --------");

/*Exercise 5:
What will be the result of the code bellow? Think without code execution

const username = "";
if (username) {
    console.log("User exists");
} else {
    console.log("No user found");
}*/

// Answer: result "No user found". Because  username = "" -> falsy value

console.log("--------Exercise 6 --------");

/*Exercise 6:
Rewrite the following if-else statement using a ternary operator:

const temp = 30;
if (temp > 25) {
    console.log("Hot day");
} else {
    console.log("Cool day");
}*/

const temp = 30;
temp > 25 ? console.log("Hot day") : console.log("Cool day");

console.log("--------Exercise 7 --------");
/*
Exercise 7:
What will be the result of the code bellow? Think without code execution:

const isAdult = false;
if(!isAdult) {
    console.log('Truthy')
} else {
    console.log('Falsy')
}*/

//Answer: result will be 'Truthy' -> (!isAdult) is logical NOT operator that inverts the boolean value

console.log("--------Exercise 8.1 --------");
/*Exercise 8:
1. What will be the result of the code bellow? Think without code execution:
const points = 0;
console.log(points || 100 );*/

//Answer: 100
// Because 0 is falsy value and logical OR (||) operator returns the first truthy value
// in our example it's second value

console.log("--------Exercise 8.2 --------");
/*2. What will be the result of the code bellow? Think without code execution:
const username = "";
console.log(username && "Guest");*/

//Answer: "" empty string
// Because "" is falsy value and logical AND (&&) operator returns the first falsy value
// in our example it's second value


console.log("--------Exercise 8.3 --------");
/*3.What will be the result of the code bellow? Think without code execution:
const userCountry = null;
console.log(userCountry ?? 'USA');
*/

//Answer: 'USA'
// Because ?? operator returns the first defined value

console.log("--------Exercise 9 --------");
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

//Answer: 1. { name: 'Test user', year: 2005 }  -> year is not provided (false) and for || we use first true
//Answer: 2. { name: 'Default value', year: 2005 }  -> name is not provided (false) and for || we use first true
//Answer: 3. { name: 'Default value', year: 2005 }  -> name and year are not provided (false) and for || we use first true

console.log("--------Exercise 10 --------");

/*
Exercise 10:
Use all three logical assignment operators (||=, &&=, ??=) in one function:

function updateUser(user) {
    // Your code here
}

const userOne = { name: "", age: null, premium: true };
const userTwo = { name: "Alice", age: 25, premium: false };

updateUser(userOne);
updateUser(userTwo);

console.log(userOne);
/!* Expected Output:
{ name: "Guest", age: 18, premium: true }
*!/

console.log(userTwo);
/!* Expected Output:
{ name: "Alice", age: 25, premium: false }
*!/*/


function updateUser(user) {

    user.name ||= "Guest";

    user.age ??= 18;

    user.premium &&= true;
}

const userOne = {name: "", age: null, premium: true};
const userTwo = {name: "Alice", age: 25, premium: false};

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