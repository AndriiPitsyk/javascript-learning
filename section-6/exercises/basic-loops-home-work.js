console.log("Exercise 1 ");
// Exercise 1:
// Write a for loop that calculates the factorial of 5 (5! = 5 × 4 × 3 × 2 × 1).
let factorial = 1
for (let i = 5; i > 1; i--) {
    factorial *=i;
    console.log(i,factorial);
}

console.log("Exercise 2");
// Exercise 2:
// Modify the loop below to stop when a number greater than 50 is found. Use break here.
const numbers = [10, 20, 30, 60, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 50) {
        console.log('number greater than 50 is found')
        break;
    }
    console.log(numbers[i]);
}

console.log("Exercise 3 ");
// Exercise 3:
// Given an array of numbers, write a loop that skips all negative numbers and prints only positive numbers. Use continue here.
const numbersArr = [10, -5, 20, -8, 30, -2];

for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] <= 0) {
        continue;
    }
    console.log(numbers[i])
}

console.log("Exercise 4");
// Exercise 4:
// - Write a for loop that prints Fibonacci numbers up to 10.
let a = 0, b = 1;

for (let i = 0; i <= 10; i++) {
    console.log(a);
    let next = a + b
    a = b;
    b = next;
}

console.log("Exercise 5");
//Exercise 5:
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
let i = 0;

while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

console.log("Exercise 6");
//Exercise 6:
// 1. Write a while loop that prints numbers from 10 to 1.
let number = 10;

while (number >= 1) {
    console.log(`number ${number}!`);
    number--;
}
// 2. Write a while loop that calculates the sum of numbers from 1 to 5.
let num = 1;
let sum = 0;

while (num <= 5) {
    sum = sum + num;
    num++;
}
console.log(`sum: ${sum}`);

console.log("Exercise 7");
//Exercise 7:
// Write a do...while loop that prints only even numbers from 2 to 20.

let evenNumbers = 2;
do {
    console.log("Number " + evenNumbers);
    evenNumbers = evenNumbers + 2;
} while (evenNumbers <= 20)

console.log("Exercise 8");
//Exercise 8:
// Write a do...while loop that finds the largest number in an array.
const numbersInArr = [3, 7, 2, 9, 5, 11, 4];
let startNumber = 0;
let max = numbersInArr[0];

do {
    if (numbersInArr[startNumber] > max) {
        max = numbersInArr[startNumber];
    }
    startNumber++;
} while (startNumber < numbersInArr.length);

console.log("Largest number:", max);

console.log("Exercise 9");
//Exercise 9:
// Write a for...of loop that sums all the numbers in the array:

const numbersArray = [5, 10, 15, 20];
let sumOfArrayNumbers = 0;

for (const number of numbersArray) {
    sumOfArrayNumbers = sumOfArrayNumbers + number;
}
console.log("Sum:", sumOfArrayNumbers);

console.log("Exercise 10");
//Exercise: 10
// Write a for...of loop that finds the longest word in an array.

const words = ["apple", "banana", "strawberry", "kiwi"];
let longest = "";

for (const word of words) {
    if (word.length > longest.length) {
        longest = word;
    }
}
console.log(longest);

console.log("Exercise 11");
//Exercise: 11
// 1. Write a for...in loop that prints all the keys of an object
const person = { name: "Alice", age: 25, city: "New York" };
for(const key in person ){
    console.log(key);
}
//2. Write a for...in loop that prints all the values of an object.
const car = { brand: "Tesla", model: "Model 3", year: 2023 };

for(const key in car ){
    console.log(car[key]);
}

//3. Write a for...in loop that prints both keys and values of an object.
const book = { title: "Harry Potter", author: "J.K. Rowling", year: 1997 };

for (const key in book ){
    console.log(key ,book[key]);
}

console.log("Exercise 12");
//Exercise 12:
// Write a for...of loop that iterates over an array of objects, printing each property of the objects using for...in.
const students = [
    { name: "John", age: 20, grade: "A" },
    { name: "Emma", age: 22, grade: "B" },
    { name: "Michael", age: 21, grade: "A+" }
];

for(const student of students){
    console.log(student);
    for (const key in student){
        console.log(`${key}: ${student[key]}`);
    }
}