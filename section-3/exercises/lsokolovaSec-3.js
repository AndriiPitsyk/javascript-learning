//Exercise 1:
console.log("----Exercise 1-----");
//1. Create an empty array numbers, then add values 10, 20, 30 using index positions.
const numbers = [];
//numbers.push(10, 20, 30);
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
console.log(numbers);

//2. Create an array with different data types: a string, a number, and a boolean. Print its length.
const difTypeArray = ["Hello World!", 25, true];
console.log(difTypeArray.length);

//3. Create an array animals with at least 3 elements. Print the second element.
//4. Change the last element of animals to "Lion" and print the updated array.
const animals = ["Dog", "Cat", "Tiger"];
console.log(animals[1]);

animals[animals.length - 1] = "Lion";
console.log(animals);

//Exercise 2:
console.log("----Exercise 2-----");
//1. Create an object named car with properties: brand, model, and year. Print the whole object
const car = {
    brand: "Volkswagen",
    model: "Golf",
    year: 2017
};
console.log(car);

//2. Add properties *color* and *engine* to the car object by different ways. Set values to that properties what ever you want.
car.color = "Black";
car["engine"] = "2.0";

console.log(car);

//3. Change the value of year to 2025 and print the updated object.
car.year = 2025;
console.log(car);

//4. Delete brand property from object and print the updated object.
delete car.brand;
console.log(car);

//Exercise 3:
console.log("----Exercise 3-----");
//Create an array cars with "Toyota", "Ford", "BMW".
const cars = ["Toyota", "Ford", "BMW"];
console.log(cars);

//Add "Tesla" to the end of array.
cars.push("Tesla");
console.log(cars);

//2. Remove "Toyota" car from cars array and print the array.
cars.shift();
//cars.splice(0, 1);
console.log(cars);

//3. Check if array includes "Ford" in cars array
const includesFord = cars.includes("Ford");
console.log(includesFord);

//4. Add Mercedes as a 1st element of cars array
cars.unshift("Mercedes");
console.log(cars);

/*Exercise 4:
What will show console log in the code bellow ? Think without code execution

const cars = ["Toyota", "Ford", "BMW", 'Tesla'];
const carsTwo = cars;
carsTwo.push('Mercedes');
console.log(cars.length);*/

//Answer: cars and carsTwo refer to the same array in a memory heap (array is reference type),
// any change in one array (add/delete element) will affect the other
// cars.length = 5

//Exercise 5:
console.log("----Exercise 5-----");
//Create an object calculator with properties num1 and num2, add method add() that returns their sum.
const calculator =
    {
        numOne: 5,
        numTwo: 15,
        add: function () {
            return this.numOne + this.numTwo;
        }
    }
console.log('numOne + numTwo = ', calculator.add());


//Exercise 6:
console.log("----Exercise 6-----");
/*You have an array of 12 months
const twelveMonths = [ 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
From twelveMonths array extract months which are related to autumn in separate array.*/

const twelveMonths = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
//const autumnMonths = twelveMonths.slice(8, 11);//.slice() excludes the last index
const autumnMonths = twelveMonths.filter(month =>
    month === 'September' || month === 'October' || month === 'November'
);

console.log(autumnMonths);


//Exercise 7:
console.log("----Exercise 7-----");
/* You have two arrays
    const fruitsOne = ["Apple", "Banana"];
    const fruitsTwo = ["Cherry", "Mango"];
Merge these 2 arrays to one array using all methods which you know;*/

const fruitsOne = ["Apple", "Banana"];
const fruitsTwo = ["Cherry", "Mango"];
//const allFruits = fruitsOne.concat(fruitsTwo); //Method 1
const allFruits = [...fruitsOne, ...fruitsTwo];//Method 2
fruitsTwo.unshift(...fruitsOne); // Method 3
//fruitsOne.push(...fruitsTwo); // Method 4

console.log(fruitsTwo);
console.log(allFruits);
//console.log(fruitsOne);

//Exercise 8:
console.log("----Exercise 8-----");
//1. Merge two objects { a: 1, b: 2 } and { c: 3, d: 4 } to one object;
//2. For the merged object print object keys & object values;
const firstObject = {
    a: 1,
    b: 2
};
const secondObject = {
    c: 3,
    d: 4
};
const mergedObject = { ...firstObject, ...secondObject };
const mergedObjectWay2 = Object.assign({}, firstObject, secondObject);

console.log(mergedObject);
console.log(mergedObjectWay2);
console.log("object keys:", Object.keys(mergedObject));
console.log("object values:", Object.values(mergedObject));

//Exercise 9:
console.log("----Exercise 9-----");
//Create a car object with properties: brand, model, and year. Destructure brand and model from the car object.
const carObject = {
    brand: "Volkswagen1",
    model: "Golf1",
    year: 2017
};
const {brand, model} = carObject;

console.log(brand, model);