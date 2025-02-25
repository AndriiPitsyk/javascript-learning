/*
Exercise 1:
- Write a function declaration getUserInfo(userInfo) where userInfo should include firstName, lastName, year,
company where user works.
Function should return following string: 'Hello, my name is Test User, I'm 25. I work in Levi9 company';
Use template literal to form that string.
*/

function getUserInfo(userInfo) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userInfo.year;
    return `Hello, my name is ${userInfo.firstName} ${userInfo.lastName}, I'm ${age}. I work in ${userInfo.company} company.`
}

const user = {
    firstName: "Test",
    lastName: "User",
    year: 2000,
    company: "Levi9"
};

console.log(getUserInfo(user));

/*
Exercise 2:
Create a global variable counter = 0 and write a function declaration increaseCounter() that increments
and logs counter.
Each time when you execute increaseCounter function global counter should be increased on 1;
*/
let counter = 0;

function increaseCounter() {
    counter++;
    console.log(counter);
}

/*
Exercise 3:
What will show console logs in the code bellow ? Think without code execution
const message = 'Hi User';

function greet() {
    const message = 'Hello World';
};
console.log(message)
*/

/*
Answer: Will be displayed 'Hi User' because it was declared globally, instead of message from
greet function
*/

/*
Exercise 4:
Create a function expression joinWords that joins multiple words into a sentence and print the result.
Use rest operator for passing arguments in function.
*/

const joinWords = (...words) => {
    return words.join(' ');
}

console.log(joinWords('My', 'name', 'Vlad'));

/*
Exercise 5:
What will show console logs in the code bellow ? Think without code execution

const getUserInfo = function(name = 'Default', year = 2000) {
    return 'My name is' + ' ' + name + ', I am' + ' ' + year;
}
console.log(getUserInfo('Test user'));
console.log(getUserInfo('Test user two', 2025));
*/

/*
Answer:
The first console.log will show 'My name is Test user, I am 2000' because we only pass one parameter,
and for the year, JavaScript will use the defined value '2000'.
The second console.log will show 'My name is Test user two, I am 2025' because both parameters
are passed, and the new values are used.
 */

/*
Exercise 6:
Write an arrow function calculatePrice where will be two arguments "price" and "tax" that returns the total
price after tax.
Function should calculate the total price even if "tax" argument is not passed. Hint: use default value.
*/

const calculatedPrice = (price, tax = 5) =>
    price + (price * tax / 100);

console.log(calculatedPrice(100));

/*
Exercise 7:
What will show each console logs in the code bellow? Think without code execution

let firstName = 'Test user';

if(true) {
    const userAge = 25;
    firstName = 'Test user two';
    console.log(firstName);  ??
}
console.log(userAge); ??
*/

/*
Answer: Will be displayed error, because userAge declared inside of if and not available globally, if comment this part
then console.log(firstName); will show 'Test user two' because value was updated inside of if (which always true)
 */

/*
Exercise 8:
Declare a global object user = { name: "Alice", age: 25 }. Modify its age inside a function and log the object.
*/

let newUser = {
    name: "Alice",
    age: 25
}

function updateAge(newAge) {
    newUser.age = newAge;
}

updateAge(30);
console.log(newUser);

/*
Exercise 9:
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
*/

/*
Answer: firstly displayed error because of userYears variable which is outside of if block, if comment it then
will be displayed 'Test user', 'test@gmail.com', 25
*/

/*
Exercise 10:
1. Rewrite function declaration to function expression:
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
*/
const getFullName = (firstName, lastName)=>
    `${firstName} ${lastName}`

console.log(getFullName('Vlad', 'Snitsar'));
/*
2. Rewrite this function expression to declaration:
    const multiply = function(a, b) {
        return a * b;
    };
*/

function multiply(a, b) {
    return a * b;
}

/*
3. Rewrite function declaration & function expression from 1 & 2 to arrow function;
*/

console.log("Arrow function for first task")
const arrowGetFullName = (firstName, lastName)=> `${firstName} ${lastName}`;
console.log(arrowGetFullName('Vlad', 'Snitsar'));

console.log("Arrow function for second task")
const arrowMultiply =  (a, b) => a * b ;
console.log(arrowMultiply(5, 5));