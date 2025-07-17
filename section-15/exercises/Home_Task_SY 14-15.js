console.log("Exercise 1")
class PersonOne {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const personOne = new PersonOne("Alice", 30);
personOne.introduce();

console.log("Exercise 2")
class PersonTwo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }

    celebrateBirthday() {
        this.age += 1;
        console.log(`Happy Birthday! You are now ${this.age} years old.`);
    }
}
const personTwo = new PersonTwo("Alice", 30);
personTwo.introduce();
personTwo.celebrateBirthday();
personTwo.introduce();

console.log("Exercise 3")
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }

    celebrateBirthday() {
        this.age += 1;
        console.log(`Happy Birthday! You are now ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old. I am in grade ${this.grade}.`);
    }
}

const student1 = new Student("Sviatoslav", 32, 92);
student1.introduce();


console.log("Exercise 4")

// 1. Base class: Vehicle
class Vehicle {
    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
    }

    accelerate(amount) {
        this.speed += amount;
        console.log(`${this.brand} accelerated by ${amount} km/h. Current speed: ${this.speed} km/h.`);
    }

    brake(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`${this.brand} braked by ${amount} km/h. Current speed: ${this.speed} km/h.`);
    }

    showInfo() {
        console.log(`Brand: ${this.brand}, Speed: ${this.speed} km/h`);
    }
}

// 2. Subclass: Car
class Car extends Vehicle {
    constructor(brand, fuelType) {
        super(brand);
        this.fuelType = fuelType;
    }

    signal() {
        console.log(`Beep beep! This is a ${this.brand} car.`);
    }

    showInfo() {
        console.log(`Brand: ${this.brand}, Speed: ${this.speed} km/h, Fuel Type: ${this.fuelType}`);
    }
}

const vehicleOne = new Vehicle("Generic Motors");

vehicleOne.accelerate(30);
vehicleOne.brake(10);
vehicleOne.showInfo();


const car1 = new Car("Toyota", "Petrol");
car1.accelerate(50);
car1.signal();
car1.brake(20);
car1.showInfo();



