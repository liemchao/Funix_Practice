const caseDates = ['2022-01-01',
    '2022-02-01',
    '2022-03-01',
    '2022-04-01',
]
const caseDatas = [0,
    1,
    2,
]


const getCovidDataUSA = () => {
    fetch(`https://disease.sh/v3/covid-19/nyt/usa`)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then((data) => {
            let keys = data.map((data) => {
                return data.date;
            });
            let cases = data.map((data) => {
                return data.cases;
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


getCovidDataUSA();