console.log("-------------Exercise 1 ---------------");
/*Exercise 1:
Use forEach() to double each number in the array and print the result.*/

const nums = [2, 4, 6, 8];
// Your code here
nums.forEach(num => {
    console.log(num * 2);
});

console.log("-------------Exercise 2 ---------------");
/*Exercise 2:
Use forEach() to print only the even numbers from an array.*/

const numbers = [3, 10, 7, 8, 15, 2];
// Your code here
numbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(num);
    }
});

console.log("-------------Exercise 3 ---------------");
/*Exercise 3:
User filter() to create an array of names that is longer than 4 characters.*/

const names = ["Anna", "Jonathan", "Lee", "Michael"];
// Your code here
const longNames = names.filter(name => name.length > 4);

console.log(longNames);

console.log("-------------Exercise 4 ---------------");
/*Exercise 4:
Use map() to create a new array where each number is doubled.*/

const numbs = [1, 2, 3, 4, 5];
// Your code here
const doubledNumbers = numbs.map(num => num * 2);

console.log(doubledNumbers);

console.log("-------------Exercise 5 ---------------");
/*Exercise 5:
Use map() to create an array of messages like "Alice is 25 years old".*/

const users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];
// Your code here
const messages = users.map(user => `${user.name} is ${user.age} years old`);

console.log(messages);

console.log("-------------Exercise 6 ---------------");
/*Exercise 6:
Return an array of students who passed scores 50*/
const students = [
    {name: "Alice", score: 45},
    {name: "Petr", score: 50},
    {name: "Bob", score: 80},
    {name: "Mika", score: 49},
    {name: "Charlie", score: 60},
    {name: "Eleanor", score: 39}
];
// Your code here
const passedScores = students.filter(student => student.score >= 50);

console.log(passedScores);

console.log("-------------Exercise 7 ---------------");
/*Exercise 7:
Use reduce() to sum all numbers in an array.*/

const numArr = [1, 2, 3, 4, 5, 12, 33];
// Your code here
const sum = numArr.reduce((total, num) => total + num, 0);

console.log("Sum:", sum);

console.log("-------------Exercise 8 ---------------");
/*Exercise 8:
Use reduce() to calculate the total price of all products in a shopping cart.*/

const cart = [
    {name: "Laptop", price: 1000},
    {name: "Mouse", price: 50},
    {name: "Keyboard", price: 80}
];
// Your code here
const totalPrice = cart.reduce((total, product) => total + product.price, 0);

console.log("Total Price:", totalPrice);

console.log("-------------Exercise 9 ---------------");
/*Exercise 9:
Take the people array and create an array called youngPeople that stores objects with ONLY name and email properties of
all the people that are 25 and under. The name property should have their first and last name.*/

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'Sara@gmail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age: 23,
    },
];
const youngPeople = people.filter(person => person.age <= 25)
    .map(person => ({
        name: person.firstName + " " + person.lastName,
        email: person.email, // Get the email
        //age: person.age,
    }));

console.log(youngPeople);
// Expected Result:
/*
[
    {name: 'Jane Poe', email:'jane@gmail.com'},
    {name: 'Sara Soe', email:'sara@gmail.com'},
    {name: 'Jose Koe', email:'jose@gmail.com'}
]*/
