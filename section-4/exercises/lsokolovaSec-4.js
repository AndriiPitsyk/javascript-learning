console.log("--------Exercise 1--------");

/* Exercise 1:
- Write a function declaration getUserInfo(userInfo) where userInfo should include firstName, lastName, year, company where user works.
    Function should return following string: 'Hello, my name is Test User, I'm 25. I work in Levi9 company';
Use template literal to form that string.
*/
function getUserInfo(userInfo) {

    const {firstName, lastName, year, company} = userInfo;

    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    return `Hello, my name is ${firstName} ${lastName}, I'm ${age}. I work in ${company} company.`;
}

const user = {
    firstName: "Test",
    lastName: "User",
    year: 2000,
    company: "Levi9"
};

console.log(getUserInfo(user));

console.log("--------Exercise 2--------");
/*Exercise 2:
Create a global variable counter = 0 and write a function declaration increaseCounter() that increments and logs counter.
    Each time when you execute increaseCounter function global counter should be increased on 1;*/

let counter = 0;

function increaseCounter() {
    counter++;
    console.log(counter);
}

increaseCounter(); // counter = 1
increaseCounter(); // counter = 2

console.log("--------Exercise 3--------");
/*Exercise 3:
What will show console logs in the code bellow ? Think without code execution
const message = 'Hi User';

function greet() {
    const message = 'Hello World';
};
console.log(message)
*/
// Answer: console log show message 'Hi User' - message is declared as global variable,
// local variable message = 'Hello World' is declared in scope of function and only exists inside the function.
// We don't need use ';' after function declaration in task example

console.log("--------Exercise 4--------");
/*Exercise 4:
Create a function expression joinWords that joins multiple words into a sentence and print the result. Use rest operator for passing arguments in function.*/

const joinWords = (...words) => {
    return words.join(' ');

}
console.log(joinWords('Hello', 'World', '!'));

const joinWordsSecondWay = function (...words) {
    console.log(words.join(' '));
};

joinWordsSecondWay('Hello', 'World', '!', 'Second', 'Way');

console.log("--------Exercise 5--------");
/*Exercise 5:
What will show console logs in the code bellow ? Think without code execution

const getUserInfo = function(name = 'Default', year = 2000) {
    return 'My name is' + ' ' + name + ', I am' + ' ' + year;
}
console.log(getUserInfo('Test user'));
console.log(getUserInfo('Test user two', 2025));*/

/*Answer:
The first console.log(getUserInfo('Test user')) - show 'My name is Test user, I am 2000'
function getUserInfo get only one parameter and second use year = 2000 that defined as default
The second console.log(getUserInfo('Test user two', 2025)) - show 'My name is Test user two, I am 2025'
function ignored both default value and use values from function call.*/

console.log("--------Exercise 6--------");
/*Exercise 6:
Write an arrow function calculatePrice where will be two arguments "price" and "tax" that returns the total price after tax.
Function should calculate the total price even if "tax" argument is not passed. Hint: use default value.*/

const calculatePrice = (price, tax = 0.2) => {
    return price + price * tax;
};

console.log(calculatePrice(100)); //120
console.log(calculatePrice(10, 0.15)); //11.5
console.log(calculatePrice(100, 0.1)); //110

console.log("--------Exercise 7--------");
/*Exercise 7:
What will show each console logs in the code bellow? Think without code execution

let firstName = 'Test user';

if(true) {
    const userAge = 25;
    firstName = 'Test user two';
    console.log(firstName);  ??
}
console.log(userAge); ??*/

/*Answer:
The first console.log(firstName); - shows 'Test user two'
We declare global variable firstName = 'Test user' and inside block if update global variable
The second console.log(userAge) - will be undefined because we are trying to access userAge outside if block,
variable  userAge declared inside the block if and available only in this block*/

console.log("--------Exercise 8--------");
/*Exercise 8:
Declare a global object user = { name: "Alice", age: 25 }. Modify its age inside a function and log the object.*/

const userOne = {name: "Alice", age: 25};

function updateUserAge(newAge) {
    userOne.age = newAge;
}

updateUserAge(35);
console.log(userOne);


console.log("--------Exercise 9--------");
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
outerFunction();

/*Answer:
console.log(userName); - "Test user" - userName global variable and we can use it everywhere
console.log(userEmail); - "test@gmail.com" - userEmail is defined in scope of function, and we can access to it inside outerFunction()
console.log(userYears); - 25 - userYears is defined in scope of block IF and available only in this block
Last console.log(userYears); - undefined because we are trying to access userYears outside IF block
*/

console.log("--------Exercise 10.1--------");
/*Exercise 10:
1. Rewrite function declaration to function expression:
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}*/

const getFullName = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
};

console.log(getFullName('Liliia', 'Sokolova'));

console.log("--------Exercise 10.2--------");
/*
2. Rewrite this function expression to declaration:
const multiply = function(a, b) {
  return a * b;
};*/

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 4));

console.log("--------Exercise 10.3--------");
/* 3. Rewrite function declaration & function expression from 1 & 2 to arrow function;*/

const getFullNameArrow = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(getFullNameArrow('Liliia', 'Sokolova'));

const multiplyArrow = (a, b) => a * b;
console.log(multiplyArrow(6, 4));