import Vehicle from './Vehicle.js';

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

const car = new Car('Test', 20, 'Electric');
console.log(car.signal());
console.log(car.showInfo());
console.log(car.brake(10));
console.log(car.accelerate(15));

// In file where class Car is implemented export new instance of class with already defined values
// (Not class should be imported, instance of class)
export default new Car('Test', 20, 'Electric');