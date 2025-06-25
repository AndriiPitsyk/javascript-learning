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
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`
    }
}

const personInfo = new Person('Vlad', 33);
console.log(personInfo.introduce());

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
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }

    celebrateBirthday() {
        this.age++;
        return `Happy Birthday! You are now ${this.age} years old.`;
    }
}

const personInfo = new Person('Vlad', 33);
console.log(personInfo.introduce());
console.log(personInfo.celebrateBirthday());

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
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }

    celebrateBirthday() {
        this.age++;
        return `Happy Birthday! You are now ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old. I am in grade ${this.grade}.`;
    }
}

const student = new Student('Vlad', 33, 95);
console.log(student.introduce());

/*
Exercise 4:
Create a class hierarchy where a base class represents a general Vehicle, and a subclass represents a specific type of vehicle,
    such as a Car. The subclass should inherit from the base class and use super to pass some values to the parent constructor.
*/
class Vehicle {
    constructor(diameter, brand) {
        this.diameter = diameter;
        this.brand = brand;
    }
}

class CarVehicle extends Vehicle {
    constructor(diameter, brand, season) {
        super(diameter, brand)
        this.season = season;
    }
}

const vehicle = new CarVehicle(17, 'Peugeot', 'Summer');
console.log(vehicle);

/*
4.1. Create a Vehicle class with properties: brand (the brand of the vehicle) & speed (initially set to 0).
Methods:
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
        this.speed += amount;
        return this.speed;
    }

    brake(amount) {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0;
        }
        return this.speed;
    }

    showInfo() {
        return console.log(`${this.brand} has speed ${this.speed}`);
    }
}

const carInfo = new Vehicle('Peugeot', 50);
console.log(carInfo.accelerate(10));
console.log(carInfo.brake(20));
carInfo.showInfo();

/*
4.2. Create a Car class that extends Vehicle with additional
properties: fuelType (e.g., "Petrol", "Diesel", "Electric").
Methods: signal(): prints "Beep beep! This is a <brand> car." and implement showInfo() to also display the fuel type.

Ensure proper class inheritance:
The Car class should use super to pass brand to the Vehicle class. All methods should work correctly for both classes.
*/

class Vehicle {
    constructor(brand, speed = 0) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(amount) {
        this.speed += amount;
        return this.speed;
    }

    brake(amount) {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0;
        }
        return this.speed;
    }

    showInfo() {
        return `${this.brand} has speed ${this.speed}`;
    }
}

class Car extends Vehicle {
    constructor(brand, speed = 0, fuelType,) {
        super(brand, speed);
        this.fuelType = fuelType;
    }

    signal() {
        return `Beep beep! This is a ${this.brand} car.`
    }

    showInfo() {
        return `${this.brand} has speed ${this.speed} and use ${this.fuelType}`;
    }
}

const car = new Car('Peugeot', 40, 'Petrol');
console.log(car.showInfo());
const oldCar = new Vehicle('Citroen', 35, 'Electric')
console.log(oldCar.showInfo());
console.log(car.signal());