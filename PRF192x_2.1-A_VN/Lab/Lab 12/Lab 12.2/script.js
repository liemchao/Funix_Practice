
'use strict';

// data 1
let data1 = [5, 2, 4, 1, 15, 8, 3];

//data 2
let data2 = [16, 6, 10, 5, 6, 1, 4];


const calcAverageHumanAge = (dogAges) => {
    let humanAges = dogAges.map((dogAge, index) => {
        if (dogAge <= 2) {
            return 2 * dogAge;
        } else {
            return 16 + dogAge * 4;
        }
    });

    let humanAgesThanOrEqual18 = humanAges.filter(humanAge => {
        return humanAge >= 18;
    })


    let sumHumanAge = humanAgesThanOrEqual18.reduce((previous, current) => {
        return previous += current;
    }, 0)

    let averageHumanAge = sumHumanAge / humanAgesThanOrEqual18.length;
    console.log("- average: ", averageHumanAge)
}

console.log("Data 1:")
calcAverageHumanAge(data1);

console.log("\n\nData 2:")
calcAverageHumanAge(data2);

// const checkDogs = (dogJulia, dogKate) => {
//     let newDogJulia = dogJulia.slice(1, dogJulia.length - 1);
//     console.log(`New dogs's Julia: [${newDogJulia.join(', ')}]`);

//     let newDogJuliaKate = newDogJulia.concat(dogKate);
//     console.log(`New dogs's Julia and Kate: [${newDogJuliaKate.join(', ')}]`)

//     console.log("Dog's Julia: ");
//     isAdultOrPuppy(newDogJulia);

//     console.log("Dog's Kate: ");
//     isAdultOrPuppy(dogKate);
// }

// console.log("Data 1:")
// checkDogs(dogJulia1, dogKate1);

// console.log("\n\nData 2:")
// checkDogs(dogJulia2, dogKate2);