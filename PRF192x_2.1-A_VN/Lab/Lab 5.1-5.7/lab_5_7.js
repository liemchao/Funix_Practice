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

const percentageOfWorld1 = (population) => {
    return (population / 7900 * 100).toFixed(2);
}

let percentages3 = [];

let index = 0;
while (index < populations.length) {
    percentages3[index] = percentageOfWorld1(populations[index].population);
    index++;
}

percentages3.forEach(currentValue => {
    console.log(`${currentValue}%`)
});