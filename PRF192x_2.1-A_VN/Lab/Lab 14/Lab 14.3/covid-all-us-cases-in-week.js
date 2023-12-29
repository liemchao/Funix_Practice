
const getCovidCaseWeekly = (data) => {
    const manyRecordValid = data.length - (data.length % 7);
    let arrayFirstDayInWeek = [];
    for (let index = 0; index <= manyRecordValid; index += 7) {
        arrayFirstDayInWeek.push(data[index]);
    }
    return arrayFirstDayInWeek;
}

const getCovidDataUSAWeekly = () => {
    fetch(`https://disease.sh/v3/covid-19/nyt/usa`)
        .then(response => response.json())
        .then((data) => {
            let dataFilter = getCovidCaseWeekly(data)
            let keys = dataFilter.map((covidDate) => {
                return covidDate.date;
            });
            let cases = dataFilter.map((covidCases) => {
                return covidCases.cases;
            });
            renderChart(keys, cases)
        })
        .catch((error) => {
            alert(error)
            console.error(`${error}`);
        })
}


const renderChart = (caseDates, caseDatas) => {
    bb.generate({
        bindto: "#covid-all-us-cases",
        data: {
            x: "x",
            type: "line",
            columns: [
                ['x', ...caseDates],
                ["case", ...caseDatas]
            ],

        },
        axis: {
            x: {
                type: 'category',
                tick: {
                    count: 10,
                }
            }
        }
    });
}
getCovidDataUSAWeekly();