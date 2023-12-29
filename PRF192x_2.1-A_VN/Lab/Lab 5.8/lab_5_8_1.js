let bmiMark = {
    mass: 78,
    height: 1.69
}
let bmiJohn = {
    mass: 92,
    height: 1.95
}

const calcBMI = (mass, height) => {
    return (mass / (Math.pow(height, 2))).toFixed(2);
}


let markBMI = calcBMI(bmiMark.mass, bmiMark.height);
let johnkBMI = calcBMI(bmiJohn.mass, bmiJohn.height);


if (markBMI > johnkBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnkBMI})!`);
} else {
    console.log(`John's BMI (${johnkBMI}) is higher than Mark's (${markBMI})!`);
}