// Exercise 1:
// - Write a function declaration getUserInfo(getUserInfo) where userInfo should include firstName, lastName, year, company where user works.
//     Function should return following string: 'Hello, my name is Test User, I'm 25. I work in Levi9 company';
// Use template literal to form that string.

function getUserInfo(user) {
    return `Hello, my name is ${user.firstName} ${user.lastName}, I'm ${user.year}. I work in ${user.company} company`;
}
const user ={
    firstName: "Sviatoslav",
    lastName: "Yurkiv",
    year: 32,
    company: "Levi9",
};
console.log(getUserInfo(user));

console.log(getUserInfo({
    firstName: "Johnson",
    lastName: "January",
    company: "Levi10",
    year: 33
}));

console.log(getUserInfo(user))

//Exercise 2:
// Create a global variable counter = 0 and write a function declaration increaseCounter() that increments and logs counter.
// Each time when you execute increaseCounter function global counter should be increased on 1;

let counter = 0;

function increaseCounter() {
    counter++;
   console.log(counter);
}
increaseCounter(); // 1
increaseCounter();// 2
increaseCounter(); // 3

// Exercise 3: Will show const message = 'Hi User'; because it is global variable and  const message = 'Hello World'; is a Local variable

// Exercise 4:
// Create a function expression joinWords that joins multiple words into a sentence and print the result. Use rest operator for passing arguments in function.


const joinWords = function (...words){
    console.log(words.join(' '));
}
joinWords("Johnson","Hello","January");

//Exercise 5:
// What will show console logs in the code bellow ? Think without code execution
//My name is Test user, I am 2000
// My name is Test user two, I am 2025

//Exercise 6:
// Write an arrow function calculatePrice where will be two arguments "price" and "tax" that returns the total price after tax.
// Function should calculate the total price even if "tax" argument is not passed. Hint: use default value.


const calculatePrice = (price,tax = 0) => price+(price * tax);
console.log(calculatePrice(4,));

//Exercise 7: userAge is not defined

//Exercise 8:
//Declare a global object user = { name: "Alice", age: 25 }. Modify its age inside a function and log the object.
const userObject = { name: "Alice", age: 25 };

function updateAge(newAge){
    userObject.age=newAge;
    console.log(userObject);
}
updateAge(32);
console.log(userObject);

// Exercise 9:
// What will show each console logs in the code bellow? Think without code execution:
//
//     const userName = "Test user";
//
// function outerFunction() {
//     const userEmail = "test@gmail.com";
//
//     if (true) {
//         const userYears = 25;
//         console.log(userName); // Test User
//         console.log(userEmail); // test@gmail.com
//         console.log(userYears); 25
//     }
//     console.log(userYears); not defined
// }
// outerFunction();

// Exercise 10:
// 1. Rewrite function declaration to function expression:
// function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }
const getFullName =function (firstName,lastName){
    return `${firstName} ${lastName}`;
}

// 2. Rewrite this function expression to declaration:
//     const multiply = function(a, b) {
//         return a * b;
//     };
function multiply(a,b){
    return a * b;
}

// 3. Rewrite function declaration & function expression from 1 & 2 to arrow function;
const getFullNameOne = (firstName,lastName) => `${firstName} ${lastName}`;
const multiplyOne = (a,b) => a * b;