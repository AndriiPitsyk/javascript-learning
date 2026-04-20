class Vehicle {
    constructor(brand,speed) {
        this.brand = brand;
        this.speed = speed;
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
export default Vehicle;