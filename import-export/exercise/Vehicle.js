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
export default Vehicle;