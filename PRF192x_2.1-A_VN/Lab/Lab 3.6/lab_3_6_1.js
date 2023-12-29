const averageScore = (score_1, score_2, score_3) => {
    return (score_1 + score_2 + score_3) / 3;
}

let averageScoreDolphins = 0;
let averageScoreKoalas = 0;

// Dữ liệu 1: Dolphins được 96, 108 và 89 điểm. Koalas được 88, 91 và 110 điểm
console.log('*Dữ liệu 1: Dolphins được 96, 108 và 89 điểm. Koalas được 88, 91 và 110 điểm: ');

averageScoreDolphins = averageScore(96, 108, 89); // 97.67
averageScoreKoalas = averageScore(88, 91, 110); // 96.33

console.log(
    averageScoreKoalas > averageScoreDolphins ? 'Koalas win the trophy!'
        : averageScoreKoalas < averageScoreDolphins ? 'Dolphins win the trophy!'
            : 'Both win the trophy!'
)

// Dữ liệu Bonus 1: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 123 điểm
console.log('\n*Dữ liệu Bonus 1: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 123 điểm:');
averageScoreDolphins = averageScore(97, 112, 101); // 103.33
averageScoreKoalas = averageScore(109, 95, 123); // 76
if (averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
    if (averageScoreDolphins > averageScoreKoalas)
        console.log('Dolphins win the trophy!')
    else if (averageScoreDolphins < averageScoreKoalas)
        console.log('Koalas win the trophy!')
    else console.log('Both win the trophy!')
} else if (averageScoreDolphins < 100 && averageScoreKoalas >= 100) {
    console.log('Koalas win the trophy!')
} else if (averageScoreDolphins >= 100 && averageScoreKoalas < 100) {
    console.log('Dolphins win the trophy!')
} else {
    console.log('Both not win the trophy!')
}

// Dữ liệu Bonus 2: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 106 điểm
console.log('\n*Dữ liệu Bonus 2: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 106 điểm:');
averageScoreDolphins = averageScore(97, 112, 101); // 103.33
averageScoreKoalas = averageScore(109, 95, 106); // 103.33
if (averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
    if (averageScoreDolphins > averageScoreKoalas)
        console.log('Dolphins win the trophy!')
    else if (averageScoreDolphins < averageScoreKoalas)
        console.log('Koalas win the trophy!')
    else console.log('Both win the trophy!')
} else if (averageScoreDolphins < 100 && averageScoreKoalas >= 100) {
    console.log('Koalas win the trophy!')
} else if (averageScoreDolphins >= 100 && averageScoreKoalas < 100) {
    console.log('Dolphins win the trophy!')
} else {
    console.log('No one win the trophy!')
}