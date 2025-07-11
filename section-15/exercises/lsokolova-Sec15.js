console.log("--------Exercise 1--------");
/*
Exercise 1:
Create a Person class with the following:
- A constructor that takes name and age.
- A method introduce() that logs: "Hi, my name is [name] and I am [age] years old."
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const user = new Person("John", 25);
user.introduce();

console.log("--------Exercise 2--------");
/*
Exercise 2:
Modify the Person class to include a method celebrateBirthday() that increases the person's age by 1 and logs:
"Happy Birthday! You are now [age] years old."
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }

    celebrateBirthday() {
        this.age += 1;
        console.log(`Happy Birthday! You are now ${this.age} years old.`)
    }
}

const user = new Person("John", 25);
user.introduce();
user.celebrateBirthday();

console.log("--------Exercise 3--------");
/*
Exercise 3:
Create a Student class that inherits from Person. It should:
- Have an additional property grade.
- Override introduce() to include: "I am in grade [grade]."
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }

    celebrateBirthday() {
        this.age += 1;
        console.log(`Happy Birthday! You are now ${this.age} years old.`)
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old. I am in grade ${this.grade}.`)
    }
}

const student = new Student('John', 25, 5);
student.introduce();

console.log("--------Exercise 4--------");
/*
Exercise 4:
Create a class hierarchy where a base class represents a general Vehicle, and a subclass represents a specific type of vehicle,
such as a Car. The subclass should inherit from the base class and use super to pass some values to the parent constructor.

*/

class Vehicle {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }

    describe() {
        console.log(`This is a ${this.name}, ${this.age()} years old.`);
    }
}

class Car extends Vehicle {
    constructor(name, model, year, typeEngine) {
        super(name, year);
        this.model = model;
        this.typeEngine = typeEngine;
    }

    describe() {
        console.log(`This is a ${this.name} ${this.model}, ${this.age()} years old, that has a ${this.typeEngine} engine.`);
    }
}

const myVehicle = new Vehicle("Citroen", 2020);
myVehicle.describe();
const myCar = new Car('Tesla', 'Model 3', 2014, 'electric')
myCar.describe();

console.log("-------- Exercise 4.1 --------");
/*
1. Create a Vehicle class with properties: brand (the brand of the vehicle) & speed (initially set to 0). Methods:
accelerate(amount): Increases the speed by the given amount.
brake(amount): Decreases the speed, but it cannot go below 0.
showInfo(): Logs the current brand and speed of the vehicle.
 */

class Vehicle {
    constructor(brand, speed = 0) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(amount) {
        return this.speed += amount;
    }

    brake(amount) {
        this.speed = this.speed - amount < 0 ? 0 : this.speed - amount;
    }

    showInfo() {
        console.log(`This is a Vehicle: ${this.brand}, Speed: ${this.speed} km/h`);
    }

}

const myVehicle = new Vehicle("Citroen", 30);
myVehicle.accelerate(20);
myVehicle.showInfo();

myVehicle.brake(40);
myVehicle.showInfo();

console.log("-------- Exercise 4.2 --------");
/*
Create a Car class that extends Vehicle with additional properties: fuelType (e.g., "Petrol", "Diesel", "Electric").
Methods: signal(): prints "Beep beep! This is a <brand> car." and implement showInfo() to also display the fuel type.

Ensure proper class inheritance:
The Car class should use super to pass brand to the Vehicle class. All methods should work correctly for both classes.
*/

class Car extends Vehicle {
    constructor(brand, speed, fuelType) {
        super(brand, speed);
        this.fuelType = fuelType;
    }

    signal() {
        console.log(`Beep beep! This is a ${this.brand} car.`);
    }

    showInfo() {
        console.log(`This is a Vehicle - ${this.brand}, Speed - ${this.speed} km/h and Fuel type - ${this.fuelType}`);
    }
}

const myCar = new Car("Ford", 60, "Diesel");
myCar.accelerate(40);
myCar.showInfo();
myCar.signal();