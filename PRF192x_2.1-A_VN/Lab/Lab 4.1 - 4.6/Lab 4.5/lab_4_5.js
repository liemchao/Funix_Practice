const populationOfWorld = 7900 // million

const describeCountry = (country, population) => {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world\n`
}

const percentageOfWorld1 = function (population) {
    return (population / 7900 * 100).toFixed(2);
}

let populations = [
    {
        country: 'Việt Nam',
        population: 99.53
    },

    {
        country: 'Mỹ',
        population: 331.9
    },

    {
        country: 'Phần Lan',
        population: 6
    },

    {
        country: 'Ấn Độ',
        population: 1428
    },
]

console.log(`Array populations have 4 element: ${populations.length === 4}`)

let percentages = populations.reduce((accumulator, current) => {
    accumulator.push(describeCountry(current.country, current.population));
    return accumulator;
}, []);
console.log('\n')

percentages.forEach(currentValue => {
    console.log(currentValue);
});





    // // Mỹ

    // // Việt Nam
    // console.log(describeCountry('Việt Nam', 99.53));
    // // Phần Lan
    // console.log(describeCountry('Phần Lan', 6));
