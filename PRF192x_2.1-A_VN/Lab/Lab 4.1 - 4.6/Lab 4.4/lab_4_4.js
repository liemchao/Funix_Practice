const describeCountry = (country, population) => {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world\n`
}

const percentageOfWorld1 = function (population) {
    return (population / 7900 * 100).toFixed(2);
}

console.log('\n')
// Mỹ
console.log(describeCountry('Mỹ', 331.9));

// Việt Nam
console.log(describeCountry('Việt Nam', 99.53));
// Phần Lan
console.log(describeCountry('Phần Lan', 6));