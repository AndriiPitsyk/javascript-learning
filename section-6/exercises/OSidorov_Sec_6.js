// basic loops

// Exercise 1:
let f = 1;
for (let i = 5; i > 1; i--) {
    f = f * i;
}
console.log(f);

// Exercise 2:
const numbers = [10, 20, 30, 60, 40, 50];
for (let i = 0; i < numbers.length; i++) {
// my code start
    if (numbers[i] > 50) {
        break;
    }
    console.log(numbers[i]);
// my code end
}

// Exercise 3:
const numbers1 = [10, -5, 20, -8, 30, -2];
for (let i = 0; i < numbers1.length; i++) {
// my code start
    if (numbers1[i] < 0) {
        continue;
    }
    console.log(numbers1[i]);
// my code end
}

// Exercise 4:
let x = 0, y = 1;
for (let i = 0; i < 10; i++) {
    console.log(x);
    let sum = x + y;
    x = y;
    y = sum;
}

// Exercise 5:
// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
// }
let ii = 0;
while (ii < 3) {
    console.log( `number ${ii}!` );
    ii++;
}

// Exercise 6:
// 1.
let k = 10;
while (k >= 1) {
    console.log(k);
    k--;
}
// 2.
let num = 1;
let sum4 = 0;
while (num <= 5) {
// my code start
    sum4 = num + sum4;
    console.log(sum4);
    num++;
// my code end
}

// Exercise 7:
let iii = 2;
do {console.log(iii);
    iii = iii + 2;
} while (iii <= 20) {
}

// Exercise 8:
const numbers2 = [3, 7, 2, 9, 5, 11, 4];
let i = 0;
let max = numbers2[0];
// my code start
do {
    if (numbers2[i] > max) {
        max = numbers2[i];
    }
    i ++;
} while (i < numbers2.length);
// my code end
console.log("Largest number:", max);

// Exercise 9:
const numbers3 = [5, 10, 15, 20];
let sum2 = 0;
// my code start
for (const number of numbers3) {
    sum2 = sum2 + number;
}
// my code end
console.log("Sum:", sum2);

// Exercise: 10
const words = ["apple", "banana", "strawberry", "kiwi"];
let longest = "";
// my code start
for (const word of words) {
    if (longest.length < word.length) {
        longest = word;
    }
}
// my code end
console.log("Longest word:", longest);

// Exercise: 11
// 1.
const person = { name: "Alice", age: 25, city: "New York" };
// my code start
for (const key in person) {
    console.log(key);
}
// my code end

// 2.
const car = { brand: "Tesla", model: "Model 3", year: 2023 };
// my code start
for (const value in car) {
    console.log(car[value]);
}
// my code end

// 3.
const book = { title: "Harry Potter", author: "J.K. Rowling", year: 1997 };
// my code start
for (const i in book) {
    console.log(i + ': ' + book[i]);
}
// my code end

// Exercise 12:
const students1 = [
    { name: "John", age: 20, grade: "A" },
    { name: "Emma", age: 22, grade: "B" },
    { name: "Michael", age: 21, grade: "A+" }
];
// my code start
for (const student of students1) {
    for (const property in student) {
        console.log(`${property}: ${student[property]}`);
    }
    console.log("=============");
}
// my code end

//===================================================================
// methods array
// Exercise 1:
// const nums = [2, 4, 6, 8];
// // my code start
// nums.forEach(function (double) {
//     console.log(double*2);
//     }
// );
// // my code end

// Exercise 2:
const numbers4 = [3, 10, 7, 8, 15, 2];
// my code start
numbers4.forEach(even => {
    if (even % 2 === 0)
        console.log(even);
    }
)
// my code end

// Exercise 3:
const names = ["Anna", "Jonathan", "Lee", "Michael"];
// my code start
const name = names.filter (
    (n) => n.length > 4
);
console.log(name);
// my code end

// Exercise 4:
const numbers5 = [1, 2, 3, 4, 5];
// my code start
const doubled = numbers5.map(i => i * 2);
console.log(doubled);
// my code end

// Exercise 5:
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
// my code start
const messages = users.map(person => `${person.name} is ${person.age} years old`);
console.log(messages);
// my code end

// Exercise 6:
const students = [
    { name: "Alice", score: 45 },
    { name: "Petr", score: 50 },
    { name: "Bob", score: 80 },
    { name: "Mika", score: 49 },
    { name: "Charlie", score: 60 },
    { name: "Eleanor", score: 39 }
];
// my code start
const passed = students.filter (
    (pass) => pass.score >= 50
);
console.log(passed);
// my code end

// Exercise 7:
const numbers6 = [1, 2, 3, 4, 5, 12, 33];
// my code start
const int = 0
const sum = numbers6.reduce(
    (prev, next) => prev + next,
    int
);
console.log(sum);
// my code end

// Exercise 8:
const cart = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 80 }
];
// my code start
const a = cart.reduce(
    (sum, i) => sum + i.price,
    0
);
console.log(a);
// my code end

// Exercise 9:
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
const youngPeople = people.filter (
    (a) => a.age <= 25)
    .map(person =>
    (
        {
            name: `${person.firstName} ${person.lastName}`,
            email: `${person.email}`
        }
    )
    );
// Expected Result:
console.log(youngPeople);
// [
//     {name: 'Jane Poe', email:'jane@gmail.com'},
//     {name: 'Sara Soe', email:'sara@gmail.com'},
//     {name: 'Jose Koe', email:'jose@gmail.com'}
// ]