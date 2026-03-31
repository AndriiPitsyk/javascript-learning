/*Exercise 1:
Create a Person class with the following:
- A constructor that takes name and age.
- A method introduce() that logs: "Hi, my name is [name] and I am [age] years old."
*/
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

/*Exercise 2:
Modify the Person class to include a method celebrateBirthday() that increases
the person's age by 1 and logs:
"Happy Birthday! You are now [age] years old."*/

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }

    celebrateBirthday(){
        console.log(`Happy Birthday! You are now ${this.age+1} years old.`)
    }
}

/*Exercise 3:
Create a Student class that inherits from Person. It should:
- Have an additional property grade.
- Override introduce() to include: "I am in grade [grade]."*/

class Student extends Person {

    constructor(name,age,grade){
        super(name,age);
        this.grade = grade;
    }

    introduce(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old. I am in grade ${this.grade}.`);
    }
}

/*Exercise 4:
Create a class hierarchy where a base class represents a general Vehicle,
    and a subclass represents a specific type of vehicle,
such as a Car. The subclass should inherit from the base class and use super
    to pass some values to the parent constructor.

1. Create a Vehicle class with properties: brand (the brand of the vehicle) &
    speed (initially set to 0). Methods:
accelerate(amount): Increases the speed by the given amount.
brake(amount): Decreases the speed, but it cannot go below 0.
showInfo(): Logs the current brand and speed of the vehicle. */

class Vehicle{
    constructor(brand,speed = 0){

        this.brand = brand;
        this.speed = speed;
    }

    accelerate(amount){
        return this.speed *amount;
    }

    brake(amount){
        const result = this.speed - amount;
        if(result >0){
            return result;
        }else{
            return 0;
        }
    }

    showInfo(){
        console.log(`Current brand is ${this.brand} and speed is ${this.speed} of the vehicle.`);
    }
}

/*2. Create a Car class that extends Vehicle with additional properties:
fuelType (e.g., "Petrol", "Diesel", "Electric").
Methods: signal(): prints "Beep beep! This is a <brand> car." and implement
    showInfo() to also display the fuel type.

Ensure proper class inheritance:
The Car class should use super to pass brand to the Vehicle class.
    All methods should work correctly for both classes. */

class Car extends Vehicle{
    constructor(brand,speed,fuelType){
        super(brand,speed);
        this.fuelType = fuelType;
    }

    signal(){
        console.log(`Beep beep! This is a ${this.brand} car.`)
    }

    showInfo(){
        console.log(`Current brand is ${this.brand} and speed is${this.speed} of the vehicle. Fuel type is ${this.fuelType}.`);
    }
}