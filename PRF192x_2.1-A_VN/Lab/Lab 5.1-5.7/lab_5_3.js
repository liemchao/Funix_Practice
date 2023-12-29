let myCountry = {
    country: "Finland",
    capital: "Helsinki",
    language: 'finnish-speaking',
    population: 6,
    neighbours: ["Trung Quốc", "Lào", "Campuchia"],

    describe: function () {
        console.log(`\n'${this.country} has ${this['population']} million ${this.language} people, ${this.neighbours.length} neighbouring countries and a capital called ${this['capital']}.'\n`);
    },
    checkIsland: function () {
        if (this.neighbours.length === 0)
            this.checkIsland = true;
        else this.checkIsland = false;
    }
}

myCountry.describe();


// 
myCountry.checkIsland();
console.log(myCountry, "\n")


