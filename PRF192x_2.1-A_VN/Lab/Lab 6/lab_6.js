let temperatures_first = [17, 21, 23];
let temperatures_second = [12, 5, -5, 0, 4];

const printForecast = (temperatures) => {
    let strTemperatures = '';
    for (let i = 0; i < temperatures.length; i++) {
        if (i === temperatures.length - 1)
            strTemperatures += `... ${temperatures[i]}ºC in ${i + 1} day ...`
        else
            strTemperatures += `... ${temperatures[i]}ºC in ${i + 1} day `
    }
    return strTemperatures;
}

// Dữ liệu 1: [17, 21, 23]
console.log("**Dữ liệu 1: [17, 21, 23]");
console.log(printForecast(temperatures_first));

// Dữ liệu 2: [12, 5, -5, 0, 4]
console.log("**\nDữ liệu 2: [12, 5, -5, 0, 4]");
console.log(printForecast(temperatures_second));