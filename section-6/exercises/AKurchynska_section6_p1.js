/*Exercise 1:
Write a for loop that calculates the factorial of 5 (5! = 5 × 4 × 3 × 2 × 1).*/

let result = 1;
for(let i = 1; i <= 5; i++){
    result = result * i ;
}

/*Exercise 2:
Modify the loop below to stop when a number greater than 50 is found. Use break here.*/

const numbers = [10, 20, 30, 60, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]> 50) {
        break;
    }
}

/*Exercise 3:
Given an array of numbers, write a loop that skips all negative numbers
and prints only positive numbers. Use continue here.*/

const numbers = [10, -5, 20, -8, 30, -2];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        continue;
    }
    else {
        console.log(numbers[i]);
    }
}

/*Exercise 4:
- Write a for loop that prints Fibonacci numbers up to 10.*/

let x = 0;
let y = 1;

for (let i = 0; i < 10; i++) {
    console.log(x);
    let nextNumber = x + y;
    x = y;
    y = nextNumber;
}

/*Exercise 5:
Rewrite the code changing the for loop to while without altering its behavior
(the output should stay same).
for (let i = 0; i < 3; i++) {
  console.log( `number ${i}!` );
}*/

let i = 0 ;
while (i < 3) {
    console.log( `number ${i}!` );
    i++;
}

/*Exercise 6:
1. Write a while loop that prints numbers from 10 to 1.*/

let i = 10 ;
while(i > 0) {
    console.log(i);
    i--;
}

/*2. Write a while loop that calculates the sum of numbers from 1 to 5.*/
let num = 1;
let sum = 0;

while (num <= 5) {
    sum = sum + num;
    num++;
}

/*Exercise 7:
Write a do...while loop that prints only even numbers from 2 to 20.*/

let number = 1;
do{
    if (number % 2 === 0){
        console.log(number);
    }
    number++;
}while (number <=20);

/*Exercise 8:
Write a do...while loop that finds the largest number in an array.*/

const numbers = [3, 7, 2, 9, 5, 11, 4];
let i = 0;
let max = numbers[0];

do{
    if (max < numbers[i]){
        max = numbers[i];
    }
    i++;
} while(i<numbers.length);

console.log("Largest number:", max);

/*Exercise 9:
Write a for...of loop that sums all the numbers in the array:*/

const numbers = [5, 10, 15, 20];
let sum = 0;

for (const number of numbers) {
    sum = sum + number;
}

console.log("Sum:", sum);

/*Exercise: 10
Write a for...of loop that finds the longest word in an array.*/
const words = ["apple", "banana", "strawberry", "kiwi"];
let longest = "";

for (const word of words){
    if (longest.length < word.length){
        longest = word;
    }
}
console.log("Longest word:", longest);

/*Exercise: 11
1. Write a for...in loop that prints all the keys of an object*/
const person = { name: "Alice", age: 25, city: "New York" };

for(const key in person){
    console.log(key);
}

/*2. Write a for...in loop that prints all the values of an object.*/
const car = { brand: "Tesla", model: "Model 3", year: 2023 };

for(const key in car){
    console.log(car[key]);
}

/*3. Write a for...in loop that prints both keys and values of an object.*/
const book = { title: "Harry Potter", author: "J.K. Rowling", year: 1997 };

for(const key in book){
    console.log(key, book[key]);
}

/*Exercise 12:
Write a for...of loop that iterates over an array of objects,
    printing each property of the objects using for...in.*/
const students = [
    { name: "John", age: 20, grade: "A" },
    { name: "Emma", age: 22, grade: "B" },
    { name: "Michael", age: 21, grade: "A+" }
];
// Your code here
for (const student of students) {
    for(const key in student){
        console.log(key, student[key]);
    }
    console.log();
}

