/* Exercise 1:
- Write a function declaration getUserInfo(userInfo) where userInfo should include firstName, lastName, year, company where user works.
    Function should return following string: 'Hello, my name is Test User, I'm 25. I work in Levi9 company';
Use template literal to form that string.
*/
const user = {
    firstName: 'Alex',
    lastName: 'Sidorov',
    year: 25,
    company: 'Levi9'
};
function getUserInfo(userInfo) {
    const {firstName, lastName, year, company} = userInfo;
    console.log(`Hello, my name is ${firstName} ${lastName}, I'm ${year}. I work in ${company} company`);
}
getUserInfo(user);


/* Exercise 2:
Create a global variable counter = 0 and write a function declaration increaseCounter() that increments and logs counter.
Each time when you execute increaseCounter function global counter should be increased on 1;
 */
let counter = 0;
function increaseCounter() {
    counter+= 1;
    console.log(counter);
}
increaseCounter();
// I don't understand 1 moment: "Each time when you execute increaseCounter", but I got each time only '1' in result - what wrong in my understanding?


/* Exercise 3:
What will show console logs in the code bellow ? Think without code execution
const message = 'Hi User';
 */
// const message = 'Hi User';
'Hi User'
// function greet() {
//     const message = 'Hello World';
// };
// console.log(message)
error cause message is out function;


/* Exercise 4:
Create a function expression joinWords that joins multiple words into a sentence and print the result. Use rest operator for passing arguments in function.
 */
const joinWords = (...words) => {
    return words.join(' ');
};
console.log(joinWords('The', 'cat', 'sat', 'on', 'the', 'windowsill', 'purring'));


/* Exercise 5:
What will show console logs in the code bellow ? Think without code execution
 */
// const getUserInfo = function(name = 'Default', year = 2000) {
//     return 'My name is' + ' ' + name + ', I am' + ' ' + year;
// }
// console.log(getUserInfo('Test user'));
// console.log(getUserInfo('Test user two', 2025));
'My name is Test user, I am 2000'
'My name is Test user two, I am 2025'


/* Exercise 6:
Write an arrow function calculatePrice where will be two arguments "price" and "tax" that returns the total price after tax.
Function should calculate the total price even if "tax" argument is not passed. Hint: use default value.
 */
const calculatePrice = (price = 0, tax = 0) => price + tax;
console.log(calculatePrice(11));


/* Exercise 7:
What will show each console logs in the code bellow? Think without code execution
 */
// let firstName = 'Test user';
// if(true) {
//     const userAge = 25;
//     firstName = 'Test user two';
//     console.log(firstName);  ??
'Test user two'
// }
// console.log(userAge); ??
error, cause userAge is const and in 'if block'


/* Exercise 8:
Declare a global object user = { name: "Alice", age: 25 }. Modify its age inside a function and log the object.
 */
let user1 = { name: "Alice", age: 25 };
function agedUser() {
    user1.age ++;
    console.log(user1);
}
agedUser();


/* Exercise 9:
What will show each console logs in the code bellow? Think without code execution:
 */
//     const userName = "Test user";
// function outerFunction() {
//     const userEmail = "test@gmail.com";
//     if (true) {
//         const userYears = 25;
//         console.log(userName); ??
'Test user'
//         console.log(userEmail); ??
'test@gmail.com'
//         console.log(userYears); ??
25
//     }
//     console.log(userYears); ??
error, cause userYears is in 'if block'
// }
// outerFunction();


/* Exercise 10:


1. Rewrite function declaration to function expression:
function getFullName(firstName, lastName) {
   return `${firstName} ${lastName}`;
} */
const fullName = function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName('Alex', 'Sidorov'));
/* 2. Rewrite this function expression to declaration:
     const multiply = function(a, b) {
         return a * b;
     };*/
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
// 3. Rewrite function declaration & function expression from 1 & 2 to arrow function;
// 1.
const fullName1 = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}
console.log(fullName1('Alex', 'Sidorov'));
// 2.
const multiply1 = (a, b) => {
   return a * b;
}
console.log(multiply1(2, 5));