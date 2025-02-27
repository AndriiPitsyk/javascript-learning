console.log("Exercise 1");
// 1.1
const numbers= [];
numbers[0]= 10;
numbers[1]=20;
numbers[2]=30;
// 1.2
const types = ["Hello",29,true];
console.log(types.length);
// 1.3
const animals =['Tiger','Cat','Dog'];
console.log(animals[1]);
// 1.4
animals[2]= 'Lion';
console.log(animals);

console.log("Exercise 2");
// 2.1
const car ={
    brand:"Ford",
    model:"Fusion",
    year: 2019
};
console.log(car);

// 2.2
car.color = 'Red';
car['engine'] = "2.0 Hybrid";
console.log(car);

// 2.3
car.year = 2025;
console.log(car);

// 2.4
delete car.brand;
console.log(car);

console.log("Exercise 3");

const cars =["Toyota", "Ford", "BMW"];
console.log(cars);
// 3.1
cars.push("Tesla");
console.log(cars);
// 3.2
cars.shift();
console.log(cars);
// 3.3
console.log(cars.includes("Ford"));
// 3.4
cars.unshift("Mercedes");
console.log(cars);

console.log("Exercise 4: it will show 5");

console.log("Exercise 5");
// Create an object calculator with properties num1 and num2, add method add() that returns their sum.

const calculator ={
    numOne: 2,
    numTwo: 3,
    add(){
        return this.numOne + this.numTwo;
    }
};
console.log(calculator.add());

console.log("Exercise 6");

const twelveMonths = [ 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

const autumnArray = twelveMonths.slice(8,11);

console.log(autumnArray);

console.log("Exercise 7");

const fruitsOne = ["Apple", "Banana"];
const fruitsTwo = ["Cherry", "Mango"];
const allFruitsOptionOne = fruitsOne.concat(fruitsTwo);
const allFruitsOptionTwo=[...fruitsOne,...fruitsTwo];
console.log(allFruitsOptionOne);
console.log(allFruitsOptionTwo);


console.log("Exercise 8");

const objectOne = { a: 1, b: 2 };
const objectTwo = { c: 3, d: 4 };

const mergedObject = {...objectOne, ...objectTwo};
// OR
const mergedObjectTwo =Object.assign({},objectOne,objectTwo);

console.log(Object.keys(mergedObject));
console.log(Object.values(mergedObject));



console.log("Exercise 9");

const newCar ={
    brand:"Ford",
    model:"Fusion",
    year: 2019
};

const {brand, model} = newCar;

console.log(brand);
console.log(model);

