// Exercise 1:
// Create a Person class with the following:
// - A constructor that takes name and age.
// - A method introduce() that logs: "Hi, my name is [name] and I am [age] years old."

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }

    celebrateBirthday() {
        return `Happy Birthday! You are now ${this.age + 1} years old.`;
    }
}

const person = new Person("Jemeson", 100);
console.log(person.introduce());
console.log(person.celebrateBirthday());

// Exercise 2:
// Modify the Person class to include a method celebrateBirthday() that increases the person's age by 1 and logs:
// "Happy Birthday! You are now [age] years old."


//
// Exercise 3:
// Create a Student class that inherits from Person. It should:
//     - Have an additional property grade.
// - Override introduce() to include: "I am in grade [grade]."
class Student extends Person {
    constructor(grade) {
        super()
        this.grade = grade;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old. I am in grade ${this.grade}`;
    }
}

const student = new Student("Jemeson", 50, 12);
console.log(student.introduce());
// Exercise 4:
// Create a class hierarchy where a base class represents a general Vehicle, and a subclass represents a specific type of vehicle,
//     such as a Car. The subclass should inherit from the base class and use super to pass some values to the parent constructor.
//
class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    carInfo() {
        return `Brand is ${this.brand} and launch at ${this.year}`;
    }
}

const vehicle = new Vehicle('Toyota', 2020);
console.log(vehicle.carInfo());

class Car extends Vehicle {
    constructor(brand, year, model) {
        super(brand, year);
        this.model = model;
    }

    carInfo() {
        return `This is a ${this.brand} ${this.model} from ${this.year}.`;
    }
}

const car = new Car('Audi', 2020, "Q5");
console.log(car.carInfo());
// 1. Create a Vehicle class with properties: brand (the brand of the vehicle) & speed (initially set to 0). Methods:
// accelerate(amount): Increases the speed by the given amount.
// brake(amount): Decreases the speed, but it cannot go below 0.
// showInfo(): Logs the current brand and speed of the vehicle.
class VehicleTwo {
    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
    }

    accelerate(amount) {
        this.speed = this.speed + amount;
        return `This is a ${this.brand} has speed up to ${this.speed}.`;
    }

    brake(amount) {
        this.speed = Math.max(0, this.speed - amount);
        return `This is a ${this.brand} slowed down to ${this.speed}.`;
    }

    showInfo() {
        return `Brand is ${this.brand} and speed: ${this.speed}.`
    }
}

class CarTwo extends VehicleTwo {
    constructor(brand, fuelType) {
        super(brand);
        this.fuelType = fuelType;
    }

    signal() {
        console.log(`Beep beep! This is a ${this.brand} car.`);
    }

    showInfo() {
        console.log(`Brand: ${this.brand}, Speed: ${this.speed} , Fuel Type: ${this.fuelType}`);
    }
}

// 2. Create a Car class that extends Vehicle with additional properties: fuelType (e.g., "Petrol", "Diesel", "Electric").
//    Methods: signal(): prints "Beep beep! This is a <brand> car." and implement showInfo() to also display the fuel type.
//
//     Ensure proper class inheritance:
// The Car class should use super to pass brand to the Vehicle class. All methods should work correctly for both classes.
const vehicleTwo = new VehicleTwo("Toyota");
console.log(vehicleTwo.accelerate(150));
console.log(vehicleTwo.brake(50));

const carTwo = new CarTwo("BMW", "hybrid");
console.log(carTwo.accelerate(75));
console.log(carTwo.brake(50));
carTwo.signal();
carTwo.showInfo();
