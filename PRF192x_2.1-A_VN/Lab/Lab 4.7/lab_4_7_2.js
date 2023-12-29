
const tipCalculator = (totalBill) => {
    return (totalBill >= 50 && totalBill <= 300) ? totalBill * (15 / 100) : totalBill * (20 / 100);
}

// bill 100
bill = 100;
tip = tipCalculator(bill);
console.log(`\nThe bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}\n`)

let bills = [125, 555, 44];
let tips = [];
let totals = [];

for (let index = 0; index < bills.length; index++) {
    let tip = tipCalculator(bills[index]);
    tips.push(tip);
    totals.push(bills[index] + tip);
}

for (let index = 0; index < bills.length; index++) {
    console.log(`The bill was ${bills[index]}, the tip was ${tips[index]}, and the total value ${totals[index]}\n`);
}


