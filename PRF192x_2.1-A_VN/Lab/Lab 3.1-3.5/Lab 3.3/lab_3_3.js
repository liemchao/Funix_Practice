let language = prompt('What is language of the country you want to life?');
let population = prompt('How many people?(million)');
population = Number(population);

let isIsLand = prompt('You want life on island or not?(Yes or No)');

if (population && population > 0) {
    if (population <= 50 && language.toUpperCase() === 'ENGLISH' && isIsLand.toUpperCase() === 'NO') {
        console.log("You should live in Portugal :)'");
    } else {
        console.log('Portugal does not meet your criteria :(');
    }
} else {
    console.log('Portugal does not meet your criteria :(');
}
