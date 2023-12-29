
'use strict';

// data 1
let data1 = [5, 2, 4, 1, 15, 8, 3];

//data 2
let data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (dogAges) => {
    let length = 0;
    let averageHumanAge = dogAges.map((dogAge) => {
        if (dogAge <= 2) {
            return 2 * dogAge;
        } else {
            return 16 + dogAge * 4;
        }
    }).filter(humanAge => {
        return humanAge >= 18;
    }).reduce((previous, current) => {
        length++
        return previous += current;
    }, 0) / length;
    console.log("- average: ", averageHumanAge)
}

console.log("Data 1:")
calcAverageHumanAge(data1);

console.log("\n\nData 2:")
calcAverageHumanAge(data2);
