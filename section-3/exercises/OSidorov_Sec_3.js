/* Exercise 1:
1. Create an empty array numbers, then add values 10, 20, 30 using index positions.
2. Create an array with different data types: a string, a number, and a boolean. Print its length.
3. Create an array animals with at least 3 elements. Print the second element.
4. Change the last element of animals to "Lion" and print the updated array.
 */
// 1.
let empty_arr = [];
empty_arr[0] = 30;
empty_arr[1] = 20;
empty_arr[2] = 10;
console.log(empty_arr);
// 2.
const diff_types = ['string', 13, false];
console.log(diff_types.length);
// 3.
const animals = ['ape', 'elephant', 'monkey'];
console.log(animals[1]);
// 4.
animals[2] = 'lion';
console.log(animals);

/* Exercise 2:
1. Create an object named car with properties: brand, model, and year. Print the whole object
2. Add properties *color* and *engine* to the car object by different ways. Set values to that properties what ever you want.
3. Change the value of year to 2025 and print the updated object.
4. Delete brand property from object and print the updated object
 */
// 1.
const car = {
    brand : 'bmw',
    model : 'd1',
    year : 2020,
};
console.log(car);
// 2.
    car['color'] = 'black';
    car.engine = 'v12';
console.log(car);
// 3.
car['year'] = 2025;
console.log(car);
// 4.
delete car.brand;
console.log(car);

/* Exercise 3:
Create an array cars with "Toyota", "Ford", "BMW".
1. Add "Tesla" to the end of array.
2. Remove "Toyota" car from cars array and print the array.
3. Check if array includes "Ford" in cars array
4. Add Mercedes as a 1st element of cars array
 */
const cars = ['Toyota', 'Ford', 'BMW'];
// 1.
cars.push('Tesla');
console.log(cars);
// 2.
cars.shift();
console.log(cars);
// 3.
boolean = cars.includes('Ford');
console.log(boolean);
// 4.
cars.unshift('Mercedes');
console.log(cars);

/* Exercise 4:
What will show console log in the code bellow ? Think without code execution

const cars = ["Toyota", "Ford", "BMW", 'Tesla'];
const carsTwo = cars;
carsTwo.push('Mercedes');
console.log(cars.length);
 */
// const cars = ["Toyota", "Ford", "BMW", 'Tesla'];
['Toyota', 'Ford', 'BMW', 'Tesla']
// const carsTwo = cars;
['Toyota', 'Ford', 'BMW', 'Tesla']
// carsTwo.push('Mercedes');
['Toyota', 'Ford', 'BMW', 'Tesla', 'Mercedes']
// console.log(cars.length);
5

/* Exercise 5:
Create an object calculator with properties numOne and numTwo with number values, add method add() that returns their sum.
 */
const numOne = 11;
const numTwo = 2;
const calc = {
    numOne,
    numTwo,
    add() {
        return this.numOne + this.numTwo;
    },
};
console.log(calc.add());

/* Exercise 6:
You have an array of 12 months
const twelveMonths = [ 'January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];

From twelveMonths array extract months which are related to autumn in separate array.
 */
const twelveMonths = [ 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
// console.log(twelveMonths[9], twelveMonths[10], twelveMonths[11]);
console.log(twelveMonths.slice(8,11));

/* Exercise 7:
You have two arrays
const fruitsOne = ["Apple", "Banana"];
const fruitsTwo = ["Cherry", "Mango"];

Merge these 2 arrays to one array using all methods which you know;
 */
const fruitsOne = ["Apple", "Banana"];
const fruitsTwo = ["Cherry", "Mango"];
fruits = [...fruitsOne, ...fruitsTwo];
// fruitsOne.push(fruitsTwo);
console.log(fruits);
// console.log(fruitsOne);
// console.log(fruitsOne.concat(fruitsTwo));

/* Exercise 8:
1. Merge two objects { a: 1, b: 2 } and { c: 3, d: 4 } to one object;
2. For the merged object print object keys & object values;
 */
const number1 = { a: 1, b: 2 };
const number2 = { c: 3, d: 4 };
// 1.
numbers = {...number1, ...number2};
// 2.
console.log(Object.entries(numbers));

/* Exercise 9:
Create a car object with properties: brand, model, and year. Destructure brand and model from the car object.
 */
const car5 = {
    brand : 'Ford',
    model : 's3',
    year : 2020,
};
const { brand, model } = car5;
console.log(brand, model);