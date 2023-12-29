let population = 35;


let averagePopulation = 33;
console.log(`\nPopulation is ${population} million people`)
if (population > averagePopulation) {
    console.log(`Portugal's population is above average.`);
} else {
    console.log(`Portugal's population is below average.`);
}

let tmp = population;

population = 30;
console.log(`\nPopulation is ${population} million people`)
if (population > averagePopulation) {
    console.log(`Portugal's population is above average.`);
} else {
    console.log(`Portugal's population is below average.`);
}

population = 130;
console.log(`\nPopulation is ${population} million people`)
if (population > averagePopulation) {
    console.log(`Portugal's population is above average.`);
} else {
    console.log(`Portugal's population is below average.`);
}

population = tmp;
console.log(`\nReset population: ${population}`)