console.log("Exercise 1")
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person1 = new Person1("Alice", 30);
person1.introduce();

console.log("Exercise 2")
class Person2 {
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
const person2 = new Person2("Alice", 30);
person2.introduce();
person2.celebrateBirthday();
person2.introduce();

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

const vehicle1 = new Vehicle("Generic Motors");
vehicle1.accelerate(30);
vehicle1.brake(10);
vehicle1.showInfo();


const car1 = new Car("Toyota", "Petrol");
car1.accelerate(50);
car1.signal();
car1.brake(20);
car1.showInfo();



