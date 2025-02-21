
//==========================
// Exercise 1

let currentTemperature = 0;
let isRaining = false;
let cityName = "Kyiv";

//Exercise 2: - error because const variables must be assigned a value
/*  What will show console log in the code bellow ? Think without code execution.
const; userName;
userName = 'Test';
console.log(userName);  */

//Exercise 3:
let messageOne; // Declare the variable
messageOne = "Hello, World!"; // Assign a value

let messageTwo = messageOne; // Copy value from messageOne to messageTwo

console.log(messageOne); // Hello, World!
console.log(messageTwo); // Hello, World!

//Exercise 4: - Igor
/* What will show console log in the code bellow? Think without code execution.
const userName = 'Igor';
const secondUserName = userName;

console.log(secondUserName);*/

//Exercise 5:
const text = "Hello World!";

// 1. Convert whole string to lowercase
const lowerText = text.toLowerCase();
console.log(lowerText);

// 2. Check if "Hello" is present in the string
const checkText = text.includes("Hello");
console.log(checkText); // true

// 3. Extract "World" from text
const extractText = text.substring(6, 11);
console.log(extractText); // Output: "World"

//Exercise 6:
const name = "John";
const age1 = 25;
const message = `Hello, my name is ${name} and I'm ${age1} years old.`;

console.log(message);

//Exercise 7:
/* What will be the result of each console log ? Think without code execution.
console.log(5 == "5"); true
console.log(5 === "5"); false, 5 is a number and "5" is a string
console.log(!false); true */

//Exercise 8:
/*What will show console log in the code bellow ? Think without code execution.

const person = { name: "Alice", age: 25 }.
const personTwo = person;
personTwo.age = 33;

console.log(personTwo.age); ?? 33
console.log(person.age); ?? 33 */


//**********************************

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;
console.log(age);
age=31;
console.log(age);

let score;
score=1;
console.log(score);
if (true) {
    score=score+1;
}
console.log(score);

const x=100;
console.log(x);

const arr=[1,2,3,4];
arr.push(5);
console.log(arr);

const person={
    name: 'Bred',
}
person.name='Jonh';
person.email='bred@gmail.com';
console.log(person);

let a, b, c;
const d=10,
    e=20,
    f=30;
console.log(d);
