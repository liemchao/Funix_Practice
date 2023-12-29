const country = "Vietnamese";
let continent = "Asia";
let population = 94.47;
let isIsland = false;
const language = 'Vietnamese';


console.log(`population: ${population / 2} triệu người.`);

population += 1;
console.log(`population: ${population} triệu người.`);

let populationFinland = 6;
console.log(population > populationFinland ? 'Dân số Việt Nam đông hơn.' : 'Dân số Phần Lan ít hơn.');

let averagePopulation = 33;
console.log(population > populationFinland ? 'Dân số Việt Nam đông hơn dân số trung bình.' : 'Dân số Việt Nam ít hơn dân số trung bình.');

let description = `${country} and its ${population} million people speak ${language}.`;
console.log(description)