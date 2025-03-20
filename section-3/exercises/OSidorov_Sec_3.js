// Exercise 1:
// 1.
const arr = [];
arr.push(10, 20, 30);
// 2.
const diff_types = ['string', 13, false];
console.log(diff_types.length);
// 3.
const animals = ['ape', 'elephant', 'monkey'];
console.log(animals[1]);
// 4.
animals[2] = 'lion';
console.log(animals);

// Exercise 2:
// 1.
const car = {
    brand : 'bmw',
    model : 'd1',
    year : 2020,
};
console.log(car);
// 2.
const car1 = {
    color : 'black',
    engine : 'v12',}
car2 = {...car, ...car1};
console.log(car2);
// 3.
car2['year'] = 2025;
console.log(car2);
// 4.
delete car2.brand;
console.log(car2);

// Exercise 3:
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

// Exercise 4:
// const cars = ["Toyota", "Ford", "BMW", 'Tesla'];
['Toyota', 'Ford', 'BMW', 'Tesla']
// const carsTwo = cars;
['Toyota', 'Ford', 'BMW', 'Tesla']
// carsTwo.push('Mercedes');
['Toyota', 'Ford', 'BMW', 'Tesla', 'Mercedes']
// console.log(cars.length);
5

// Exercise 5:
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

// Exercise 6:
// const twelveMonths = [ 'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'];
console.log(twelveMonths[9], twelveMonths[10], twelveMonths[11]);

// Exercise 7:
// const fruitsOne = ["Apple", "Banana"];
// const fruitsTwo = ["Cherry", "Mango"];
fruits = [...fruitsOne, ...fruitsTwo];
console.log(fruits);

// Exercise 8:
// const number1 = { a: 1, b: 2 };
// const number2 = { c: 3, d: 4 };
// 1.
numbers = {...number1, ...number2};
// 2.
console.log(Object.entries(numbers));

// Exercise 9:
const car5 = {
    brand : 'Ford',
    model : 's3',
    year : 2020,
};
const { brand, model } = car5;
console.log(brand, model);