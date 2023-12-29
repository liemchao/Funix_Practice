
const getCovidDataUSA = (year) => {
    fetch(`https://disease.sh/v3/covid-19/nyt/usa`)
        .then(response => response.json())
        .then((data) => {
            let filterByYear = data.filter((data) => {
                return data.date.includes(year);
            })
            let keys = filterByYear.map((data) => {
                return data.date;
            });
            let cases = filterByYear.map((data) => {
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

const init = () => {
    getCovidDataUSA('2023');
}

init();