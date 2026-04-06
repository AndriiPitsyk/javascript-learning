export default class Vehicle {

    constructor(brand, speed = 0) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(amount) {
        return this.speed * amount;
    }

    brake(amount) {
        const result = this.speed - amount;
        if (result > 0) {
            return result;
        } else {
            return 0;
        }
    }

    showInfo() {
        console.log(`Current brand is ${this.brand} and speed is ${this.speed} of the vehicle.`);
    }
}