let bmiMark = {
    mass: 78,
    height: 1.69
}
let bmiJohn = {
    mass: 92,
    height: 1.95,
}

let bmi = (mass, height) => {
    return (mass / (Math.pow(height, 2))).toFixed(2);
}

let markHigherBMI = false;

// data 1
console.log('Data 1: ');

let markBMI_data1 = bmi(bmiMark.mass, bmiMark.height);
let johnkBMI_data1 = bmi(bmiJohn.mass, bmiJohn.height);

console.log(`Mark's BMI: ${markBMI_data1}`)
console.log(`John's BMI: ${johnkBMI_data1}`)

if (markBMI_data1 > johnkBMI_data1) {
    markHigherBMI = true;
    console.log(`Chỉ số bmi của Marnk cao hơn: ${markHigherBMI}`);
} else {
    markHigherBMI = false;
    console.log(`Chỉ số bmi của Marnk cao hơn: ${markHigherBMI}`);
}

// data 2
console.log('\nData 2: ');

bmiMark = { mass: 95, height: 1.88 };
bmiJohn = { mass: 85, height: 1.76 };

let markBMI_data2 = bmi(bmiMark.mass, bmiMark.height);
let johnkBMI_data2 = bmi(bmiJohn.mass, bmiJohn.height);

console.log(`Mark's BMI: ${markBMI_data2}`)
console.log(`John's BMI: ${johnkBMI_data2}`)

if (markBMI_data2 > johnkBMI_data2) {
    markHigherBMI = true;
    console.log(`Chỉ số bmi của Marnk cao hơn: ${markHigherBMI}`);
} else {
    markHigherBMI = false;
    console.log(`Chỉ số bmi của Marnk cao hơn: ${markHigherBMI}`);
}
