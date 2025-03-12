// Exercise 1:
//Write a function declaration getUserInfo(userInfo) where userInfo should include firstName, lastName, year, company where user works.
//Function should return following string: 'Hello, my name is Test User, I'm 25. I work in Levi9 company';
// Use template literal to form that string.

const userInfo = {
    name: "Denys",
    year: 18,
    companyName: "Levi9"
};

function getUserInfo(userInfo){
    return `Hello, my name is ${userInfo.name}, I am ${userInfo.year}. I work in ${userInfo.companyName} company.`;
}

console.log(getUserInfo(userInfo));

//
//     Exercise 2:
// Create a global variable counter = 0 and write a function declaration increaseCounter() that increments and logs counter.
// Each time when you execute increaseCounter function global counter should be increased on 1;
let counter = 0;

function increaseCounter() {
    return counter = counter + 1;
}
console.log(increaseCounter()); //Output: 1
console.log(increaseCounter()); //Output: 2

// Exercise 3:
// What will show console logs in the code bellow ? Think without code execution
// const message = 'Hi User';
//
// function greet() {
//     const message = 'Hello World';
// };
// console.log(message)
//Output: "Hi user" - global variable

// Exercise 4:
// Create a function expression joinWords that joins multiple words into a sentence and print the result. Use rest operator for passing arguments in function.
const createSentences = (...word) =>{
    const sentence = word.join(" ")
    console.log(sentence);
}
createSentences('Abra', '-', 'Cadabra', '!');

//  Exercise 5:
// What will show console logs in the code bellow ? Think without code execution
//
// const getUserInfo = function(name = 'Default', year = 2000) {
//     return 'My name is' + ' ' + name + ', I am' + ' ' + year;
// }
// console.log(getUserInfo('Test user')); //Output:My name is Test user, Iam 2000 year;
// console.log(getUserInfo('Test user two', 2025)); //Output: My name is Test user two, Iam 2025 year;
//
// Exercise 6:
// Write an arrow function calculatePrice where will be two arguments "price" and "tax" that returns the total price after tax.
// Function should calculate the total price even if "tax" argument is not passed. Hint: use default value.
const calculatePrice = (price, tax=0.05) => price + (price * tax);
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.5));

// Exercise 7:
// What will show each console logs in the code bellow? Think without code execution
//
// let firstName = 'Test user';
//
// if(true) {
//     const userAge = 25;
//     firstName = 'Test user two';
//     console.log(firstName);  ?? //Output: Test user two
// }
// console.log(userAge); ??// Error - we try to get access to variable which is available only in if scope

// Exercise 8:
// Declare a global object user = { name: "Alice", age: 25 }. Modify its age inside a function and log the object.
const userTwo = {
    name: "Alice",
    age: 25
};
function changeUserAge(newUserAge){
    userTwo.age = newUserAge;
}
changeUserAge(40);
console.log(userTwo);

//     Exercise 9:
// What will show each console logs in the code bellow? Think without code execution:
//
//     const userName = "Test user";
//
// function outerFunction() {
//     const userEmail = "test@gmail.com";
//
//     if (true) {
//         const userYears = 25;
//         console.log(userName); ?? // Output: Test User
//         console.log(userEmail); ??// test@gmail.com
//         console.log(userYears); ??// 25
//     }
//     console.log(userYears);// Error
// }
// outerFunction();

// Exercise 10:
// 1. Rewrite function declaration to function expression:
// function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }
const getFullName = function(firstName, lastName){
    return `${firstName} ${lastName}`;
};

// 2. Rewrite this function expression to declaration:
//     const multiply = function(a, b) {
//         return a * b;
//     };
function multiply(a, b){
    return a + b;
}
//
// 3. Rewrite function declaration & function expression from 1 & 2 to arrow function;
const getFullNameTwo = (firstName, lastName) => `${firstName} ${lastName}`;
const multiplyTwo = (a, b) => a * b;