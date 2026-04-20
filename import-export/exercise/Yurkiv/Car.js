import Vehicle from './Vehicle.js'

class Car extends Vehicle {
    constructor(brand, speed,fuelType) {
        super(brand, speed);
        this.fuelType = fuelType;
    }

    signal() {
        console.log(`Beep beep! This is a ${this.brand} car.`);
    }

    showInfo() {
        console.log(`Brand: ${this.brand}, Speed: ${this.speed} km/h, Fuel Type: ${this.fuelType}`);
    }
}

export default new Car('Ford',160,'Hybrid');