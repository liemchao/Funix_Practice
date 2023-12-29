const calcAverage = (score_1, score_2, score_3) => {
    return (score_1 + score_2 + score_3) / 3;
}

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})\n`)
    } else if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})\n`)
    } else {
        console.log(`No team win\n`);
    }
}



let avgDolphins = 0;
let avgKoalas = 0;

//  Dữ liệu 1: Dolphins ghi được 44, 23 và 71 điểm. Koalas ghi được 65, 54 và 49 điểm.
avgDolphins = calcAverage(44, 23, 71);
avgKoalas = calcAverage(65, 54, 49);
console.log("**Dolphins ghi được 44, 23 và 71 điểm. Koalas ghi được 65, 54 và 49 điểm:")
checkWinner(avgDolphins, avgKoalas);

//  Dữ liệu 2: Dolphins ghi được 85, 54 và 41 điểm. Koalas ghi được 23, 34 và 27 điểm.
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log("**Dolphins ghi được 85, 54 và 41 điểm. Koalas ghi được 23, 34 và 27 điểm.:")
checkWinner(avgDolphins, avgKoalas);

