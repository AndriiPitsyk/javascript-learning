/*
Exercise 1:
You are building a weather app. Use a clear and meaningful name of variables to define:
- The current temperature
- Whether it’s raining or not
- The city name
*/
    const currentTemperature = -3;
    const isRaining = false;
    const cityName = 'Kyiv';

/*
Exercise 2:
What will show console log in the code bellow ? Think without code execution.
    const userName;
    userName = 'Test';
    console.log(userName);
*/

//Answer: Error because const was not initialized but declared

/*
Exercise 3:
Declare a let variable called messageOne,then in separate line assign a value to the variable,
then create another value called messageTwo and copy value from messageOne. Show in console
the value of messageOne and messageTwo;
Please think when you create a second variable
*/

    let messageOne;
    messageOne =  "First string";
    const messageTwo = messageOne;
    console.log(messageOne, messageTwo);

/*
Exercise 4:
What will show console log in the code bellow? Think without code execution.
    const userName = 'Igor';
    const secondUserName = userName;
    console.log(secondUserName);
*/

//Answer: "Igor"

/*
Exercise 5:
Given const text = "Hello World!", perform the following:
    1. Convert whole string to lowercase and show the result;
    2. Check if "Hello" is present in that string;
    3. Extract "World" from text and show the result
*/
    const text = "Hello, World!";
    console.log("Lowercase for string is: ",  text.toLowerCase());
    console.log("'Hello' is present in that string: ", text.includes("Hello"));
    console.log("Extracting word 'World' = : ", text.substring(7,12));

/*
Exercise 6:
Create a variables with appropriate name where values should be: John, 25
Use template literals to construct "Hello, my name is John and I'm 25 years old" using variables.
*/
    const firstName = "John";
    const age = 25;
    console.log(`Hello, my name is ${firstName} and I'm ${age} years old`);

/*
Exercise 7:
What will be the result of each console log ? Think without code execution.
    console.log(5 == "5");
    console.log(5 === "5");
    console.log(!false);
*/

//Answer: true, false, true

/*
Exercise 8:
What will show console log in the code bellow ? Think without code execution.
    const person = { name: "Alice", age: 25 }.
    const personTwo = person;
    personTwo.age = 33;
    console.log(personTwo.age); ??
    console.log(person.age); ??
*/

//Answer: both messages will be 33