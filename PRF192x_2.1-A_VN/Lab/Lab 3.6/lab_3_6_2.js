/*
bill 275
bill 40 
bill 430
*/

const tipCalculator = (totalBill) => {
    return (totalBill >= 50 && totalBill <= 300) ? totalBill * (15 / 100) : totalBill * (20 / 100)
}

let tip = 0;
let bill = 0;

// bill 275
bill = 275;
tip = tipCalculator(bill);
console.log(`\nThe bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

// bill 40
bill = 40;
tip = tipCalculator(bill);
console.log(`\nThe bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

// bill 430
bill = 430;
tip = tipCalculator(bill);
console.log(`\nThe bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}\n`)
