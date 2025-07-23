import Vehicle from './Vehicle.js';

class CarImport extends Vehicle {
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
export const car = new CarImport ('Ford', 'Petrol');