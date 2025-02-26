/*
Exercise 1:
1. Create an empty array numbers, then add values 10, 20, 30 using index positions.
2. Create an array with different data types: a string, a number, and a boolean. Print its length.
3. Create an array animals with at least 3 elements. Print the second element.
4. Change the last element of animals to "Lion" and print the updated array.
*/

console.log("Exercise 1.1.")
const numbers = [];
numbers[0] = 10;
numbers[1] = 20;
numbers[numbers.length] = 30;

console.log("Exercise 1.2.")
const mixedArray = ['sea', 33, true]
console.log(mixedArray.length);

console.log("Exercise 1.3.")
const animals = ['Lion', 'Elephant', 'Dog', 'Cat', 'Puma']
console.log(animals[1]);

console.log("Exercise 1.4.")
animals[animals.length - 1] = 'Lion'
console.log(animals);

/*
Exercise 2:
1. Create an object named car with properties: brand, model, and year. Print the whole object
2. Add properties *color* and *engine* to the car object by different ways. Set values to that
properties what ever you want.
3. Change the value of year to 2025 and print the updated object.
4. Delete brand property from object and print the updated object
*/

console.log("Exercise 2.1.")
const car = {
    brand: 'Peugeot',
    model: '2008',
    year: '2023',
}
console.log(car);

console.log("Exercise 2.2.")
console.log("Method 1:");
car.color = 'Blue';
console.log(car)
console.log("Method 2:");
Object.assign(car, {engine: '1.2 Turbo'});
console.log(car)
console.log("Method 3:");
const anotherCar = {
    wheels: '17'
}
latestCar = {...car, ...anotherCar}
console.log(latestCar);

console.log("Exercise 2.3.")
car.year = 2025;
console.log(car);

console.log("Exercise 2.4.")
delete car.brand;
console.log(car);

/*
Exercise 3:
Create an array cars with "Toyota", "Ford", "BMW".
1. Add "Tesla" to the end of array.
2. Remove "Toyota" car from cars array and print the array.
3. Check if array includes "Ford" in cars array
4. Add Mercedes as a 1st element of cars array
*/

console.log("Exercise 3.1.")
const cars = ['Toyota', 'Ford', 'BMW'];
cars.push('Tesla');

console.log("Exercise 3.2.")
cars.splice(0, 1);
console.log(cars);

console.log("Exercise 3.3.")
console.log("Cars array includes 'Ford': ", cars.includes('Ford'));
console.log(`Cars array includes 'Ford': ${cars.includes('Ford')}`);

console.log("Exercise 3.4.")
cars.unshift('Mercedes');

/*
Exercise 4:
What will show console log in the code bellow ? Think without code execution
    const cars = ["Toyota", "Ford", "BMW", 'Tesla'];
    const carsTwo = cars;
    carsTwo.push('Mercedes');
    console.log(cars.length);
*/

//Answer: both will be changed because of reference type of array, and both will have length 5

/*
Exercise 5:
Create an object calculator with properties num1 and num2, add method add() that returns their sum.
*/

const calculator = {
    numOne: 5,
    numTwo: 10,
    add() {
        return this.numOne + this.numTwo;
    },
}
console.log('Sum of two values = ', calculator.add());

/*
Exercise 6:
You have an array of 12 months
    const twelveMonths = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
From twelveMonths array extract months which are related to autumn in separate array.
*/
console.log("Exercise 6.")
const twelveMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
console.log("Method 1:");
const autumnMonths = twelveMonths.slice(8, 11);
console.log(autumnMonths);
console.log("Method 2:");
twelveMonths.splice(0, 8);
twelveMonths.pop(); //or twelveMonths.splice(-1, 1), don't manage how to do it in 1 step
console.log(twelveMonths);
/*

Exercise 7:
You have two arrays
    const fruits1 = ["Apple", "Banana"];
    const fruits2 = ["Cherry", "Mango"];
Merge these 2 arrays to one array using all methods which you know;
*/
console.log("Exercise 7.");
const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Cherry", "Mango"];

console.log("Method 1: ", fruits1.concat(fruits2));
console.log("Method 2: ", [...fruits1, ...fruits2]);
console.log("Method 3:");
fruits1.push(...fruits2)
console.log(fruits1);
/*
Exercise 8:
1. Merge two objects { a: 1, b: 2 } and { c: 3, d: 4 } to one object;
2. For the merged object print object keys & object values;
*/
const firstObject = {
    a: 1,
    b: 2
}
const secondObject = {
    c: 3,
    d: 4
}
const newObject = Object.assign({}, firstObject, secondObject);
console.log(newObject);

console.log("Keys of new object are: " + Object.keys(newObject));
console.log("Values of new object are: " + Object.values(newObject));

/*
Exercise 9:
Create a car object with properties: brand, model, and year.
Destructure brand and model from the car object.
*/

const updatedCar = {
    brand: 'Peugeot',
    model: '2008',
    year: '2023',
}

const {brand, model} = updatedCar;
console.log(brand, model);

