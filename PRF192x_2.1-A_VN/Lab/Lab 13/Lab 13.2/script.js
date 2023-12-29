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

const obj = {
    name: 'tung',

    // getName: function name() {
    //     console.log(this.name);
    // },

    getName: function () {
        console.log("ádsa")
    }
}

obj.getName;

// console.log("Data 1: 'BMW' đi với tốc độ 120 km/h");
// let bmw = new CarCl("BMW")
// bmw.speedUS = 120;
// console.log("dsadf: ", bmw.speedUS);
// bmw.accelerate();
// bmw.brake();

// console.log("Data 2: 'Mercedes' đi với tốc độ 95km/h");
// let mercedes = new CarCl("Mercedes")
// mercedes.speedUS = 95;
// mercedes.accelerate();
// mercedes.brake();