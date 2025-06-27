/*Exercise 1:
You are building a weather app. Use a clear and meaningful name of variables to define:
- The current temperature
- Whether it’s raining or not
- The city name
*/
const currentTemperature = 36;
const isRaining = true;
const cityName = 'Kyiv';

/*Exercise 2:
What will show console log in the code bellow ? Think without code execution.
*/
Test

/*Exercise 3:
Declare a let variable called messageOne,then in separate line assign a value to the variable, then create another value called messageTwo
and copy value from messageOne. Show in console the value of messageOne and messageTwo;
Please think when you create a second variable
 */
let messageOne;
messageOne = 'a';
let messageTwo;
messageTwo = 'a';
console.log(messageOne + ' ' + messageTwo);

/*Exercise 4:
What will show console log in the code bellow? Think without code execution.
const userName = 'Igor';
const secondUserName = userName;

console.log(secondUserName);
 */
Igor

/*Exercise 5:
Given const text = "Hello World!", perform the following:
1. Convert whole string to lowercase and show the result;
2. Check if "Hello" is present in that string;
3. Extract "World" from text and show the result
 */
//1.
const text = "Hello World!"
console.log(text.toLowerCase());
//2.
console.log(text.includes('Hello'));
//3.
console.log(text.substring(6, 11));

/*Exercise 6:
Create a variables with appropriate name where values should be: John, 25
Use template literals to construct "Hello, my name is John and I'm 25 years old" using variables.
 */
const name = 'John';
const age = 25;
console.log(`Hello, my name is ${name} and I'm ${age} years old`);

/*Exercise 7:
What will be the result of each console log ? Think without code execution.
console.log(5 == "5");
console.log(5 === "5");
console.log(!false);
 */
//console.log(5 == "5");
true
//console.log(5 === "5");
false
//console.log(!false);
true

/*Exercise 8:
What will show console log in the code bellow ? Think without code execution.
const person = { name: "Alice", age: 25 }.
const personTwo = person;
personTwo.age = 33;

console.log(personTwo.age); ??
console.log(person.age); ??
 */
// console.log(personTwo.age); ??
33
// console.log(person.age); ??
33
//cause of HEAP behavior