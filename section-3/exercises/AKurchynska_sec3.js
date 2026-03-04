/*Exercise 1:
1. Create an empty array numbers, then add values 10, 20, 30 using index positions.*/

const numbers = [];
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;

/*2. Create an array with different data types: a string, a number, and a boolean.
Print its length.*/

const arr = ['One' , 2 , true];
console.log(arr.length);

/*3. Create an array animals with at least 3 elements. Print the second element.*/

const animals = ['pig' , 'dog' , 'cat'];
console.log(animals[1]);

/*4. Change the last element of animals to "Lion" and print the updated array.*/

animals[animals.length-1] = 'lion';
console.log(animals);

/*Exercise 2:
1. Create an object named car with properties: brand, model, and year.
Print the whole object*/

const car = {
    brand: 'Pego',
    model: '2008',
    year: '2022'
};
console.log(car);

/*2. Add properties *color* and *engine* to the car object by different ways.
Set values to that properties what ever you want.*/

car.color = 'blue';
car['engine'] = '1.2';

/*3. Change the value of year to 2025 and print the updated object.*/

car.year = '2025';
console.log(car);

/*4. Delete brand property from object and print the updated object*/

delete car.brand;
console.log(car);

/*Exercise 3:
Create an array cars with "Toyota", "Ford", "BMW".*/

const cars = ["Toyota", "Ford", "BMW"];

/*1. Add "Tesla" to the end of array.*/

cars.push("Tesla");

/*2. Remove "Toyota" car from cars array and print the array.*/

cars.shift();
console.log(cars);

/*3. Check if array includes "Ford" in cars array*/

cars.includes("Ford");

/*4. Add Mercedes as a 1st element of cars array*/

cars.unshift("Mercedes");


/*Exercise 4:
What will show console log in the code bellow ? Think without code execution

const cars = ["Toyota", "Ford", "BMW", 'Tesla'];
const carsTwo = cars;
carsTwo.push('Mercedes');
console.log(cars.length);*/

5

/*Exercise 5:
Create an object calculator with properties numOne and numTwo with number values,
add method add() that returns their sum.*/

const calculator = {
    numOne: 50,
    numTwo: 102
};
calculator.add = function() {
    console.log(this.numOne + this.numTwo);
};
calculator.add();

/*Exercise 6:
You have an array of 12 months
const twelveMonths = [ 'January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];

From twelveMonths array extract months which are related to autumn in separate array.*/

const autumnMonths = twelveMonths.splice(8,3);

/*Exercise 7:
You have two arrays
const fruitsOne = ["Apple", "Banana"];
const fruitsTwo = ["Cherry", "Mango"];

Merge these 2 arrays to one array using all methods which you know;*/


const mixFruits = fruitsOne.concat(fruitsTwo);
const allFruits = [...fruitsOne,...fruitsTwo];
const newFruits = [fruitsOne , fruitsTwo].flat();
const fourFruits = [fruitsOne[0], fruitsOne[1],fruitsTwo[0],fruitsTwo[1]];

/*Exercise 8:
1. Merge two objects { a: 1, b: 2 } and { c: 3, d: 4 } to one object;*/

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = {...obj1,...obj2};

/*2. For the merged object print object keys & object values;*/

console.log(Object.keys(obj3));
console.log(Object.values(obj3));

/*Exercise 9:
Create a car object with properties: brand, model, and year.
Destructure brand and model from the car object.*/

const car = {
    brand: 'Pego',
    model: '2008',
    year: '2022'
};
const {brand, model} = car;
