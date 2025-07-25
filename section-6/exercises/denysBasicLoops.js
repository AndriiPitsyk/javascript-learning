//Exercise 1:
//Write a for loop that calculates the factorial of 5 (5! = 5 × 4 × 3 × 2 × 1).
let factorial = 1;

for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
}
console.log(factorial)

//Exercise 2:
//Modify the loop below to stop when a number greater than 50 is found. Use break here.

const numbers = [10, 20, 30, 60, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        console.log('meet number greater than 50 ');
        break;
    }
    console.log(numbers[i]);
}

//Exercise 3:
//Given an array of numbers, write a loop that skips all negative numbers and prints only positive numbers. Use continue here.
const numbersTwo = [10, -5, 20, -8, 30, -2];

for (let i = 0; i < numbersTwo.length; i++) {
    if (numbersTwo[i] < 0) {
        continue;
    }
    console.log(numbersTwo[i]);
}

console.log("Exercise 4");
//- Write a for loop that prints Fibonacci numbers up to 10.
let firstNumber = 0;
let secondNumber = 1;
for (let i = 0; i < 10; i++) {
     console.log(firstNumber);
     let sumOfTwo = firstNumber + secondNumber;
     firstNumber = secondNumber;
     secondNumber = sumOfTwo;
}

console.log("Exercise 5");
//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}

console.log("Exercise 5 using while loop");
let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

console.log("Exercise 6");
//Write a while loop that prints numbers from 10 to 1.
let j = 10;
while (j >= 1) {
    console.log(`number ${j}!`);
    j--;
}

console.log("Exercise 6.2");
//2. Write a while loop that calculates the sum of numbers from 1 to 5.
let num = 1;
let sum = 0;

while (num <= 5) {
    sum = sum + num;
    num++;
}
console.log(sum);

console.log('Exercise 7');
//Write a do...while loop that prints only even numbers from 2 to 20.
let number = 2;
do {
    if (number % 2 === 0) {
        console.log(number)
    }
    number++
} while (number <= 20);

console.log('Exercise 8')
//Write a do...while loop that finds the largest number in an array.

const numbersThree = [3, 7, 2, 9, 5, 11, 4];
let start = 0;
let max = numbersThree[0];
do {
    if (numbersThree[start] > max) {
        max = numbersThree[start];
    }
    start++
} while (start < numbersThree.length)
console.log("Largest number:", max);
////////////////////////////////////////////////////////////////////////////////////
console.log('Exercise 9')
//Write a for...of loop that sums all the numbers in the array:
let sumTwo = 0;
const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
let sumArrayOfNumbers = 0;
for (const number of arrayOfNumbers) {
    sumArrayOfNumbers = number + sumTwo;
}
console.log(sumArrayOfNumbers);
////////////////////////////////////////////////////////////////////////////////////
console.log('Exercise 10')
//Write a for...of loop that finds the longest word in an array.
const words = ["apple", "banana", "strawberry", "kiwi"];
let longest = ""; // store value 
for (const word of words) { 
    if (word.length > longest.length) {
        longest = word; // if length of word more than longest we assign new value
    }
}
console.log("Longest word:", longest);
////////////////////////////////////////////////////////////////////////////////////
console.log('Exercise 11')

//1.Write a for...in loop that prints all the keys of an object
const person = {name: "Alice", age: 25, city: "New York"};
for (const personKey in person) {
    console.log(personKey);
}
//2. Write a for...in loop that prints all the values of an object.
const car = {brand: "Tesla", model: "Model 3", year: 2023};
for (const carKey in car) {
    console.log(car[carKey]);
}

//3. Write a for...in loop that prints both keys and values of an object.
const book = {title: "Harry Potter", author: "J.K. Rowling", year: 1997};
for (const bookKey in book) {
    console.log(bookKey, book[bookKey]);
}

//Exercise 12:
//Write a for...of loop that iterates over an array of objects, printing each property of the objects using for...in.
const students = [
    {name: "John", age: 20, grade: "A"},
    {name: "Emma", age: 22, grade: "B"},
    {name: "Michael", age: 21, grade: "A+"}
];
for (const student of students) {
    for (const studentKey in student) {
        console.log(studentKey, student[studentKey]);
    }}