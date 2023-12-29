const percentageOfWorld1 = function (population) {
    return (population / 7900 * 100).toFixed(2);
}

// Mỹ
let percentageOfUSA = percentageOfWorld1(331.9);
console.log(`\nMỹ có 331.9 tỷ người, chiếm ${percentageOfUSA}% dân số thế giới.\n`)

// Việt Nam
let percentageOfVietNam = percentageOfWorld1(99.53);
console.log(`Việt Nam có 99.53 tỷ người, chiếm ${percentageOfVietNam}% dân số thế giới.\n`)

// Phần Lan
let percentageOfFinland = percentageOfWorld1(6);
console.log(`Phần Lan có 6 tỷ người, chiếm ${percentageOfFinland}% dân số thế giới.\n`)


const percentageOfWorld2 = function (population) {
    return (population / 7900 * 100).toFixed(2);
}

// Ấn Độ
let percentageOfIndia = percentageOfWorld2(1428);
console.log(`\nẤn Độ có 331.9 tỷ người, chiếm ${percentageOfIndia}% dân số thế giới.\n`)

// Indonesia
let percentageOfIndonesia = percentageOfWorld2(280.5);
console.log(`Indonesia có 99.53 tỷ người, chiếm ${percentageOfIndonesia}% dân số thế giới.\n`)

//  Brasil
let percentageOfBrasil = percentageOfWorld2(216);
console.log(`Brasil có 6 tỷ người, chiếm ${percentageOfBrasil}% dân số thế giới.\n`)

