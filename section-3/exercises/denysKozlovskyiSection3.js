// Exercise 1:
// 1. Create an empty array numbers, then add values 10, 20, 30 using index positions.
const numberArray  = [];
numberArray[0] = 10;
numberArray[1] = 20;
numberArray[2] = 30;

// 2. Create an array with different data types: a string, a number, and a boolean. Print its length.
const mixTypesArray = ['string', 40, true];
console.log(mixTypesArray.length);

// 3. Create an array animals with at least 3 elements. Print the second element.
const animalArray = ['dog', 'cat', 'cow'];
console.log(animalArray[1]);
// 4. Change the last element of animals to "Lion" and print the updated array.
animalArray[2] = 'Lion';
// or
// animalArray[animalArray.length -1] = 'Lion'
console.log(animalArray);

// Exercise 2:
// 1. Create an object named car with properties: brand, model, and year. Print the whole object
const car = {
    brand : 'string',
    model :'string' ,
    year : 2000
}
console.log(car);
// 2. Add properties *color* and *engine* to the car object by different ways. Set values to that properties what ever you want.
car.color = 'black';
// 3. Change the value of year to 2025 and print the updated object.
car.year = 2025;
console.log(car);
// 4. Delete brand property from object and print the updated object
delete car.brand;
console.log(car);

// Exercise 3:
// Create an array cars with "Toyota", "Ford", "BMW".
const cars =["Toyota", "Ford", "BMW"];
// 1. Add "Tesla" to the end of array.
cars.push("Tesla");
// 2. Remove "Toyota" car from cars array and print the array.
cars.shift();
// 3. Check if array includes "Ford" in cars array
cars.includes("Ford");
// 4. Add Mercedes as a 1st element of cars array
cars.unshift("Mercedes");
console.log(cars);

// Exercise 4:
// What will show console log in the code bellow ? Think without code execution
//
// const cars = ["Toyota", "Ford", "BMW", 'Tesla'];
// const carsTwo = cars;
// carsTwo.push('Mercedes');
// console.log(cars.length);
// Output: 5.  ["Toyota", "Ford", "BMW", 'Tesla', 'Mercedes']

// Exercise 5:
// Create an object calculator with properties num1 and num2, add method add() that returns their sum.
 const calculator = {
     numOne : 10,
     numTwo : 10,
     add : function (){
         return this.numOne + this.numTwo;
     }
 }
 console.log(calculator.add());

// Exercise 6:
// You have an array of 12 months
const twelveMonths = [ 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
// From twelveMonths array extract months which are related to autumn in separate array.
const autumnMonths = twelveMonths.slice(8,11);

// Exercise 7:
// You have two arrays
const fruitsOne = ["Apple", "Banana"];
const fruitsTwo = ["Cherry", "Mango"];
// Merge these 2 arrays to one array using all methods which you know;

console.log(fruitsOne.concat(fruitsTwo));
console.log([...fruitsOne, ...fruitsTwo]);

// Exercise 8:
// 1. Merge two objects { a: 1, b: 2 } and { c: 3, d: 4 } to one object;
// 2. For the merged object print object keys & object values;

const objectsOne= { a: 1, b: 2 };
const objectsTwo ={ c: 3, d: 4 };
const mergedObjectsTwo = {...objectsOne, ...objectsTwo};
console.log(mergedObjectsTwo);
const mergeObjects = Object.assign({}, objectsOne, objectsTwo);
console.log(mergeObjects);

// Exercise 9:
// Create a car object with properties: brand, model, and year. Destructure brand and model from the car object.

const carTwo = {
    brand: 'Audi',
    model: 'Q5',
    year : 2017
}

const {brand, model} = carTwo;
console.log(brand, model);