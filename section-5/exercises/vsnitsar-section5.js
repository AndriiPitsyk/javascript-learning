/*Exercise 1:
1. Write a function which will check if a user has a valid ticket ID and does user have 18+ to enter a club.
    If condition is true then print 'User is allowed to enter the club!' if false then print 'User entrance is not allowed!'
Hint: use operator *&&* to check both conditions.
2. Create a function using *||* operator to check if user position is *student* OR a *senior* to get a discount to the course.*/

//exercise 1.1
function canEnterClub(userAge, validTicket) {
    if (userAge >= 18 && validTicket) {
        return 'User is allowed to enter the club!';
    } else {
        return 'User entrance is not allowed!';
    }
}

const userAge = 18;
const validTicket = true;

console.log(canEnterClub(userAge, validTicket));

//exercise 1.2
function userDiscount(userPosition) {
    if (userPosition === 'student' || userPosition === 'senior') {
        return "User can get a discount.";
    } else {
        return "User doesn't get a discount.";
    }
}

console.log(userDiscount('student'));
console.log(userDiscount('senior'));
console.log(userDiscount('middle'));

/*Exercise 2:
What will be the result of the code bellow? Think without code execution:*/

const isSunny = true;
const hasSunscreen = false;

if (isSunny && hasSunscreen) {
    console.log("Go outside!");
} else {
    console.log("Stay indoors or use sunscreen.");
}

// will be executed else condition because (true && false) equal false

/*Exercise 3:
Create a *switch* statement that checks a traffic light color (red, yellow, green) and logs what a driver should do.*/

function driverInstruction(trafficLightColor) {
    switch (trafficLightColor) {
        case "red":
            return "Moving not allowed";
        case "yellow" :
            return "Moving not allowed, but be ready";
        case "green":
            return "Moving allowed, move!";
        default:
            return "Traffic lighter is broken";
    }
}

console.log(driverInstruction("red"));
console.log(driverInstruction("yellow"));
console.log(driverInstruction("green"));
console.log(driverInstruction("orange"));

/*Exercise 4:
Create a function which will check a student’s score is A (90+), B (80-89), C (70-79), D (60-69) and return a score from function;
In these exercises please use *if/else if/ else* statements and logical operators.*/

function examResult(studentScore) {
    if (studentScore >= 90) {
        return "User received A";
    } else if (studentScore >= 80) {
        return "User received B";
    } else if (studentScore >= 70) {
        return "User received C";
    } else if (studentScore >= 60) {
        return "User received D";
    } else {
        return "User didn't pass the exam";
    }
}

console.log(examResult(95));
console.log(examResult(82));
console.log(examResult(75));
console.log(examResult(65));
console.log(examResult(50));

/*Exercise 5:
What will be the result of the code bellow? Think without code execution
*/

const username = "";
if (username) {
    console.log("User exists");
} else {
    console.log("No user found");
}

// empty string in JS it's falsy value so will be returned "No user found"

/*Exercise 6:
Rewrite the following if-else statement using a ternary operator:
*/

const temp = 30;
if (temp > 25) {
    console.log("Hot day");
} else {
    console.log("Cool day");
}

const isHotDay = temp > 25 ? "Hot day" : "Cool day";
console.log(isHotDay);

/*Exercise 7:
What will be the result of the code bellow? Think without code execution:
*/

const isAdult = false;
if (!isAdult) {
    console.log('Truthy')
} else {
    console.log('Falsy')
}

// result will be 'Truthy', because ! of false it's true and true condition will be executed

/*Exercise 8:
1. What will be the result of the code bellow? Think without code execution:
*/

const points = 0;
console.log(points || 100);

// points = 0 it's falsy value, then || check points value if it's true - in this case its not - then will be used
// second value 100 - so result 100

/*2. What will be the result of the code bellow? Think without code execution:*/

const username = "";
console.log(username && "Guest");

// in console log will be empty string, because && returns first falsy value - in this example it's username

/*3.What will be the result of the code bellow? Think without code execution:*/

const userCountry = null;
console.log(userCountry ?? 'USA');

// output 'USA' because user country null, and ?? provide value in case if null or undefined was recognized

/*Exercise 9:
What will be the result of the code bellow? Think without code execution:
*/

function getUserData(userData) {
    return {
        name: userData.name || 'Default value',
        year: userData.year || 2005,
    }
}

console.log(getUserData({name: 'Test user'})); // test user + 2005 -  because name not falsy + falsy year
console.log(getUserData({year: 2005})); // default value + 2005 - name falsy + year not falsy but still 2005
console.log(getUserData({})); // default value + 2005 - both value falsy and used defaults

/*Exercise 10:
Use all three logical assignment operators (||=, &&=, ??=) in one function:
*/

function updateUser(userData) {
    return {
        name: userData.name ||= 'Guest',
        age: userData.age ??= 18,
        premium: userData.premium &&= true,
    }
}

const userOne = {name: "", age: null, premium: true};
const userTwo = {name: "Alice", age: 25, premium: false};

updateUser(userOne);
updateUser(userTwo);

console.log(userOne);

/** Expected Output:
 { name: "Guest", age: 18, premium: true }
 **/

console.log(userTwo);

/** Expected Output:
 { name: "Alice", age: 25, premium: false }
 **/

