// Exercise 1:
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

// Exercise 2:
let counter = 0;
function increaseCounter() {
    counter+= 1;
    console.log(counter);
}
increaseCounter();
// I don't understand 1 moment: "Each time when you execute increaseCounter", but I got each time only '1' in result - what wrong in my understanding?

// Exercise 3:
// const message = 'Hi User';
'Hi User'
// function greet() {
//     const message = 'Hello World';
// };
// console.log(message)
error cause message is out function;

// Exercise 4:
const joinWords = (...words) => {
    return words.join(' ');
};
console.log(joinWords('The', 'cat', 'sat', 'on', 'the', 'windowsill', 'purring'));

// Exercise 5:
// const getUserInfo = function(name = 'Default', year = 2000) {
//     return 'My name is' + ' ' + name + ', I am' + ' ' + year;
// }
// console.log(getUserInfo('Test user'));
// console.log(getUserInfo('Test user two', 2025));
'My name is Test user, I am 2000'
'My name is Test user two, I am 2025'

// Exercise 6:
const calculatePrice = (price = 0, tax = 0) => price + tax;
console.log(calculatePrice(11));

// Exercise 7:
// let firstName = 'Test user';
// if(true) {
//     const userAge = 25;
//     firstName = 'Test user two';
//     console.log(firstName);  ??
'Test user two'
// }
// console.log(userAge); ??
error, cause userAge is const and in 'if block'

// Exercise 8:
let user1 = { name: "Alice", age: 25 };
function agedUser() {
    user1.age ++;
    console.log(user1);
}
agedUser();

// Exercise 9:
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

// Exercise 10:
// 1. Rewrite function declaration to function expression:
// function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }
const fullName = function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName('Alex', 'Sidorov'));
// 2. Rewrite this function expression to declaration:
//     const multiply = function(a, b) {
//         return a * b;
//     };
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