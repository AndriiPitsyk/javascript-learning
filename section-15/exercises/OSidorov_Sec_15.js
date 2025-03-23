// Exercise 1:
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        console.log();
    }
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const user = new Person('Alex', 39);
user.introduce();

// Exercise 2:
class Person1 {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    introduce1() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
    celebrateBirthday() {
        this.age = this.age + 1;
        console.log(`Happy Birthday! You are now ${this.age} years old.`)
    }
}
const user1 = new Person1('Alex', 39);
user1.introduce1();
user1.celebrateBirthday();

// Exercise 3:
class Student extends Person1 {
    constructor (name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    introduce2() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old. I am in grade ${this.grade}.`);
    }
}
const student = new Student('Alex', 15, 10);
student.introduce2();
student.celebrateBirthday();

// Exercise 4:
class Vehicle {
    constructor (brand) {
        this.brand = brand;
        this.speed = 0;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log(`Accelerated by ${amount}.`);
    }
    brake(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`Braked by ${amount}.`)
    }
    showInfo() {
        console.log(`${this.brand} brand, speed is ${this.speed}.`)
    }
}
const vehicle = new Vehicle('BMW');
vehicle.showInfo();
vehicle.accelerate(320);
vehicle.brake(20);
vehicle.showInfo();

// 2.
class Car extends Vehicle {
    constructor(brand, fuelType) {
        super(brand);
        this.fuelType = fuelType;
    }
    signal() {
        console.log(`Beep beep! This is a ${this.brand} car.`);
    }
    showInfo() {
        console.log(`${this.brand} brand, speed is ${this.speed} and fuel type is ${this.fuelType}`);
    }
}
const car = new Car ('Ford', 'Petrol');
car.showInfo();
car.accelerate(60);
car.signal();
car.brake(20);
car.showInfo();