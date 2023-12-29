const percentageOfWorld3 = (population) => (population / 7900 * 100).toFixed(2);


// Mỹ
let percentageOfUSA = percentageOfWorld3(331.9);
console.log(`\nMỹ có 331.9 tỷ người, chiếm ${percentageOfUSA}% dân số thế giới.\n`)

// Việt Nam
let percentageOfVietNam = percentageOfWorld3(99.53);
console.log(`Việt Nam có 99.53 tỷ người, chiếm ${percentageOfVietNam}% dân số thế giới.\n`)

// Phần Lan
let percentageOfFinland = percentageOfWorld3(6);
console.log(`Phần Lan có 6 tỷ người, chiếm ${percentageOfFinland}% dân số thế giới.\n`)
