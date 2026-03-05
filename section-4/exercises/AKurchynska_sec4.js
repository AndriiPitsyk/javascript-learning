/*Exercise 1:
- Write a function declaration getUserInfo(userInfo) where userInfo should include
firstName, lastName, year, company where user works.
Function should return following string:
'Hello, my name is Test User, I'm 25. I work in Levi9 company';
Use template literal to form that string.*/

function getUserInfo(userInfo) {
    return `Hello, my name is ${userInfo.firstName} ${userInfo.lastName}, I'm ${2026-userInfo.year}. I work in ${userInfo.company} company`;
}

/*Exercise 2:
Create a global variable counter = 0 and write a function declaration
increaseCounter() that increments and logs counter.
Each time when you execute increaseCounter function global counter
should be increased on 1;*/

let  counter = 0;

function increaseCounter() {
    console.log(counter +=1);
}

/*Exercise 3:
What will show console logs in the code bellow ?
Think without code execution
const message = 'Hi User';

function greet() {
const message = 'Hello World';
};
console.log(message)*/

Hi User

/*Exercise 4:
Create a function expression joinWords that joins multiple words into a sentence and
print the result. Use rest operator for passing arguments in function.*/

const joinWords = function (...words) {
    let sentence='';
    for(const word of words){
        sentence = sentence + word + ' ';
    }
    console.log(sentence.trim());
}

/*Exercise 5:
What will show console logs in the code bellow ? Think without code execution

const getUserInfo = function(name = 'Default', year = 2000) {
    return 'My name is' + ' ' + name + ', I am' + ' ' + year;
}
console.log(getUserInfo('Test user'));
console.log(getUserInfo('Test user two', 2025));*/

My name is Test user , I am 2000
My name is Test user two , I am 2025

/*Exercise 6:
Write an arrow function calculatePrice where will be two arguments "price" and "tax"
that returns the total price after tax.
Function should calculate the total price even if "tax" argument is not passed.
Hint: use default value.*/

const calculatePrice = (price,tax = 0) => price-price*tax/100;

/*Exercise 7:
What will show each console logs in the code bellow? Think without code execution

let firstName = 'Test user';

if(true) {
    const userAge = 25;
    firstName = 'Test user two';
    console.log(firstName);  ??
}
console.log(userAge); ??*/

Test user two
error

/*Exercise 8:
Declare a global object user = { name: "Alice", age: 25 }.
Modify its age inside a function and log the object.*/

const user = { name: "Alice", age: 25 };

function newAge() {
    user.age = 33;
}
newAge();
console.log(user);

/*Exercise 9:
What will show each console logs in the code bellow? Think without code execution:

const userName = "Test user";

function outerFunction() {
  const userEmail = "test@gmail.com";

  if (true) {
    const userYears = 25;
    console.log(userName); ??
    console.log(userEmail); ??
    console.log(userYears); ??
  }
    console.log(userYears); ??
}
outerFunction();*/

Test user
test@gmail.com
25
error

/*Exercise 10:
1. Rewrite function declaration to function expression:
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}*/

const getFullName = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
}

/*2. Rewrite this function expression to declaration:
const multiply = function(a, b) {
  return a * b;
};*/

function multiply(a, b) {
    return a * b;
}

/*3. Rewrite function declaration & function expression from 1 & 2 to arrow function;*/

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const multiply = (a, b) => a * b;
