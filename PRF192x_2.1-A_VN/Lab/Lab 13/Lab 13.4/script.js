'use strict';
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }

    accelerate() {
        console.log(`- After accelerate: ${this.speed + 10} km/h`);
    }

    brake() {
        console.log(`- After brake: ${this.speed - 5} km/h`);
    }
}

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    accelerate() {
        this.speed = this.speed + 20;
        this.#charge = this.#charge - 1
        console.log(`-'${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%'`);
    }

    brake() {
        this.speed = this.speed - 5;
        console.log(`-'${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
    }
}


console.log("Data 1: 'Rivian' đi với tốc độ 120 km/h, với mức sạc pin là 23%");
let rivian = new EVCl("Rivian", 120, 23)
rivian.brake();
rivian.accelerate();
