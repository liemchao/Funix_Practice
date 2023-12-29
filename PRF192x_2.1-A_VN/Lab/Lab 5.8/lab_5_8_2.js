
const tipCalculator = (totalBill) => {
    return (totalBill >= 50 && totalBill <= 300) ? totalBill * (15 / 100) : totalBill * (20 / 100);
}


let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];



for (let i = 0; i < bills.length; i++) {
    let tip = tipCalculator(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

for (let i = 0; i < bills.length; i++) {
    console.log(`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${totals[i]}\n`);
}

// function calcAverage()
const calcAverage = (array) => {
    let sum = array.reduce((accumulator, current) => {
        console.log(accumulator)
        return accumulator + current;
    }, 0)
    return sum / array.length;
}

console.log(`Average: ${calcAverage(bills)}`)


