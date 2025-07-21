export  default class Vehicle {
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



