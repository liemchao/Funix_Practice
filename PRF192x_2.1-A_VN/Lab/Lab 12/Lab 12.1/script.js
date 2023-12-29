
'use strict';

// data 1
let dogJulia1 = [3, 5, 2, 12, 7];
let dogKate1 = [4, 1, 15, 8, 3];

//data 2
let dogJulia2 = [9, 16, 6, 8, 3];
let dogKate2 = [10, 5, 6, 1, 4];


const isAdultOrPuppy = (dogs) => {
    dogs.forEach((dog, index) => {
        dog >= 3 ? console.log(` - Dog number ${index + 1} is an adult, and is ${dog} years old`)
            : console.log(` - Dog number ${index + 1} is still a puppy`)
    });
}

const checkDogs = (dogJulia, dogKate) => {
    let newDogJulia = dogJulia.slice(1, dogJulia.length - 1);
    console.log(`New dogs's Julia: [${newDogJulia.join(', ')}]`);

    let newDogJuliaKate = newDogJulia.concat(dogKate);
    console.log(`New dogs's Julia and Kate: [${newDogJuliaKate.join(', ')}]`)

    console.log("Dog's Julia: ");
    isAdultOrPuppy(newDogJulia);

    console.log("Dog's Kate: ");
    isAdultOrPuppy(dogKate);
}

console.log("Data 1:")
checkDogs(dogJulia1, dogKate1);

console.log("\n\nData 2:")
checkDogs(dogJulia2, dogKate2);