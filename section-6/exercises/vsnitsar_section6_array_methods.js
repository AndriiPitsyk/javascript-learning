/*
Exercise 1: Use forEach() to double each number in the array and print the result.
*/

const nums = [2, 4, 6, 8];

nums.forEach(num => {
    console.log(`${num * 2}`);
})

nums.forEach(num => console.log(`${num * 2}`));

/*
Exercise 2:
Use forEach() to print only the even numbers from an array.
*/

const numbers = [3, 10, 7, 8, 15, 2];

numbers.forEach(number => {
    if (number % 2 === 0) {
        console.log(`${number} is even number`);
    }
})

/*
Exercise 3:
User filter() to create an array of names that is longer than 4 characters.
*/

const names = ["Anna", "Jonathan", "Lee", "Michael"];

const filteredNames = names.filter(name => name.length > 4);
console.log(filteredNames);

/*
Exercise 4:
Use map() to create a new array where each number is doubled.
*/

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

/*
Exercise 5:
Use map() to create an array of messages like "Alice is 25 years old".
*/
const users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

const correctMessages = users.map(user =>
    `${user.name} is ${user.age} years old`);
console.log(correctMessages);

/*
Exercise 6:
Return an array of students who passed scores 50
*/

const students = [
    {name: "Alice", score: 45},
    {name: "Petr", score: 50},
    {name: "Bob", score: 80},
    {name: "Mika", score: 49},
    {name: "Charlie", score: 60},
    {name: "Eleanor", score: 39}
];

console.log(students.filter(student => student.score >= 50));

/*
Exercise 7:
Use reduce() to sum all numbers in an array.
*/

const numbers = [1, 2, 3, 4, 5, 12, 33];

console.log(numbers.reduce((acc, number) => {
    acc += number;
    return acc;
}, 0));


/*
Exercise 8:
Use reduce() to calculate the total price of all products in a shopping cart.
*/
const cart = [
    {name: "Laptop", price: 1000},
    {name: "Mouse", price: 50},
    {name: "Keyboard", price: 80}
];

console.log(cart.reduce((acc, item) => {
    acc += item.price;
    return acc;
}, 0));

/*
Exercise 9:
Take the people array and create an array called youngPeople that stores objects with ONLY name and email properties of
all the people that are 25 and under. The name property should have their first and last name.
*/

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
        name: person.firstName + ' ' + person.lastName,
        email: person.email
    }));

console.log(youngPeople);

// Expected Result:
/*
console.log(youngPeople);
[
    {name: 'Jane Poe', email: 'jane@gmail.com'},
    {name: 'Sara Soe', email: 'sara@gmail.com'},
    {name: 'Jose Koe', email: 'jose@gmail.com'}
]
*/
