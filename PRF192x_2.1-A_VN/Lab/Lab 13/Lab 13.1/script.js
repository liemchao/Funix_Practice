'use strict';

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;


    const accelerate = () => {
        console.log("fsdf");
    }

    function tung(dsa) {
        console.log("Tung")
    }
}


Car.prototype.accelerate = function () {
    console.log(`- After accelerate: ${this.speed + 10} km/h`);
};

Car.prototype.brake = function () {
    console.log(`- After brake: ${this.speed - 5} km/h`);
};

console.log("Data 1: 'BMW' đi với tốc độ 120 km/h");
let bmw = new Car("BMW", 120)
bmw.accelerate();
bmw.brake();
console.log("Data 2: 'Mercedes' đi với tốc độ 95km/h");
let mercedes = new Car("Mercedes", 95)
mercedes.accelerate();
mercedes.brake();

