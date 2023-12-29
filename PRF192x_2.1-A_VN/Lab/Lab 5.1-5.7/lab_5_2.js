let myCountry = {
    country: "Finland",
    capital: "Helsinki",
    language: 'finnish-speaking',
    population: 6,
    neighbours: ["Trung Quốc", "Lào", "Campuchia"]
}

console.log(`\n'${myCountry.country} has ${myCountry['population']} million ${myCountry.language} people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry['capital']}.'\n`);


console.log("After increase population 2 million");
myCountry.population = myCountry.population + 2;
console.log(`'${myCountry.country} has ${myCountry['population']} million ${myCountry.language} people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry['capital']}.'\n`)

console.log("After decrease population 2 million");
myCountry.population = myCountry.population - 2;
console.log(`'${myCountry.country} has ${myCountry['population']} million ${myCountry.language} people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry['capital']}.'\n`)