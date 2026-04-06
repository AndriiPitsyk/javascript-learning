import Vehicle from './AK-Vehicle.js';

class Car extends Vehicle {
    constructor(brand, speed, fuelType) {
        super(brand, speed);
        this.fuelType = fuelType;
    }

    signal() {
        console.log(`Beep beep! This is a ${this.brand} car.`)
    }

    showInfo() {
        console.log(`Current brand is ${this.brand} and speed is${this.speed} of the vehicle. 
        Fuel type is ${this.fuelType}.`);
    }
}

export default new Car('Test', 20, 'Electric');