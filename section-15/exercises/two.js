class Vehicle {
    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
    }

    accelerate(amount) {
        this.speed += amount;
        console.log(`${this.brand} accelerated to ${this.speed} km/h`);
    }

    brake(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`${this.brand} slowed down to ${this.speed} km/h`);
    }

    showInfo() {
        console.log(`🚗 ${this.brand} is moving at ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    constructor(brand, fuelType) {
        super(brand);
        this.fuelType = fuelType;
    }

    honk() {
        console.log(`📢 Beep beep! This is a ${this.brand} car.`);
    }

    showInfo() {
        console.log(`${this.brand} (Fuel: ${this.fuelType}) is moving at ${this.speed} km/h`);
    }
}

const myCar = new Car("Toyota", "Petrol");
myCar.accelerate(50);
myCar.showInfo();
myCar.honk();
myCar.brake(20);
myCar.showInfo();
