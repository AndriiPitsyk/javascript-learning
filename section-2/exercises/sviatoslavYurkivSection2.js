
//Exercise 1:
const currentTemperature = 0;
const isRaining = true;
const cityName = "City";

//Exercise 2: will be an error SyntaxError: Missing initializer in const declaration

// Exercise 3:
let messageOne;
messageOne = 'Message 1';
let messageTwo;
messageTwo = messageOne
console.log(messageOne)
console.log(messageTwo)

// Exercise 4: What will show the "Igor" name for userName and secondUserName
const userName = 'Igor';
const secondUserName = userName;
console.log(userName)
console.log(secondUserName);

//Exercise 5:

const text = "Hello World!";
const lowerCaseText = text.toLocaleLowerCase()
console.log(lowerCaseText);
console.log(text.includes("Hello"));
console.log(text.substring(6,11))


//Exercise 6:

const name = "John";
const age = 25;
console.log(`Hello, my name is ${name} and I'm ${age} years old`)

// Exercise 7:

//console.log(5 == "5"); // true
//console.log(5 === "5"); // false - because of different types of values
//console.log(!false); // true - because "!" is an opposite operator

//Exercise 8:
// personTwo.age -  show 33
// person.age - show 33
