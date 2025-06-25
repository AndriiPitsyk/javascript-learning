console.log("--------------Exercise 1--------------");
/*
Exercise 1:
Write a for loop that calculates the factorial of 5 (5! = 5 × 4 × 3 × 2 × 1).*/

let result = 1;

for (let i = 5; i > 0; i--) {
    result *= i;
    console.log(i, result);
}

console.log("The factorial of 5 is: " + result);


console.log("-------------Exercise 2---------------");
/*Exercise 2:
Modify the loop below to stop when a number greater than 50 is found. Use break here.*/

const numbers = [10, 20, 30, 60, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    // Your code here
    if (numbers[i] > 50) {
        console.log(`Stop at index ${i} with value ${numbers[i]}`);
        break;
    }
}

console.log("-------------Exercise 3---------------");
/*Exercise 3:
Given an array of numbers, write a loop that skips all negative numbers and prints only positive numbers. Use continue here.*/

const numbersArr = [10, -5, 20, -8, 30, -2];

for (let i = 0; i < numbers.length; i++) {
    // Your code here
    if (numbersArr[i] < 0) {
        continue;
    }
    console.log(`index ${i} is positive ${numbersArr[i]}`);
}

console.log("-------------Exercise 4---------------");
/*
Exercise 4:
- Write a for loop that prints Fibonacci numbers up to 10.*/
// Initialize the first two Fibonacci numbers

let a = 0, b = 1;

for (let i = 0; i <= 10; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}

console.log("-------------Exercise 5---------------");
/*Exercise 5:
Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}*/

let i = 0;

while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

console.log("-------------Exercise 6.1  ---------------");
/*Exercise 6:
1. Write a while loop that prints numbers from 10 to 1.*/

let number = 10;

while (number >= 1) {
    console.log(number);
    number--;
}

console.log("-------------Exercise 6.2  ---------------");
//2. Write a while loop that calculates the sum of numbers from 1 to 5.

let num = 1;
let sum = 0;

while (num <= 5) {
    // Your code here
    sum = sum + num;
    console.log(num, sum);

    num++;
}

console.log(sum);

console.log("-------------Exercise 7 ---------------");
/*
Exercise 7:
Write a do...while loop that prints only even numbers from 2 to 20.*/

let numbs = 2;

do {
    console.log(numbs);
    numbs += 2;
} while (numbs <= 20)

console.log("-------------Exercise 8 ---------------");
/*Exercise 8:
Write a do...while loop that finds the largest number in an array.*/

const numbersArray = [3, 7, 2, 9, 5, 11, 4];
let j = 0;
let max = numbersArray[0];
// Your code here
do {
    if (numbersArray[j] > max) {
        max = numbersArray[j];
    }
    j++;
} while (j < numbersArray.length);
console.log("Largest number:", max);

console.log("-------------Exercise 9 ---------------");
/*Exercise 9:
Write a for...of loop that sums all the numbers in the array:*/

const arrayNumbers = [5, 10, 15, 20];
let sumArray = 0;
// Your code here
for (const num of arrayNumbers) {
    sumArray += num;
    //console.log(sumArray);
}
console.log("Sum:", sumArray);

console.log("-------------Exercise 10 ---------------");
/*Exercise: 10
Write a for...of loop that finds the longest word in an array.*/

const words = ["apple", "banana", "strawberry", "kiwi"];
let longest = "";
// Your code here
for (const word of words) {
    if (word.length > longest.length) {
        longest = word;
        //console.log(word, word.length);
    }
}
console.log("Longest word:", longest);

console.log("-------------Exercise 11.1 ---------------");
/*Exercise: 11
1. Write a for...in loop that prints all the keys of an object*/

const person = {name: "Alice", age: 25, city: "New York"};
// Your code here
for (const key in person) {
    console.log(key);
}

console.log("-------------Exercise 11.2 ---------------");
// 2. Write a for...in loop that prints all the values of an object.

const car = {brand: "Tesla", model: "Model 3", year: 2023};
// Your code here
for (const key in car) {
    console.log(car[key]);
}

console.log("-------------Exercise 11.3 ---------------");
// 3. Write a for...in loop that prints both keys and values of an object.

const book = {title: "Harry Potter", author: "J.K. Rowling", year: 1997};
// Your code here
for (const key in book) {
    console.log(key, book[key]);
}

console.log("-------------Exercise 12 ---------------");
/*Exercise 12:
Write a for...of loop that iterates over an array of objects, printing each property of the objects using for...in.*/

const students = [
    { name: "John", age: 20, grade: "A" },
    { name: "Emma", age: 22, grade: "B" },
    { name: "Michael", age: 21, grade: "A+" }
];
// Your code here
for (const student of students) {
    for (const key in student) {
        console.log(`${key}: ${student[key]}`); 
    }
}