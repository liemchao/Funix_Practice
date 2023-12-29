
const $ = (selector) => {
    return document.querySelector(selector);
};


const checkNumber = (numberText, warning) => {
    let number = Number.parseInt(numberText);
    if (number >= 0 && number <= 3) {
        return number
    }
    alert(warning)
    return -1;
}

const poll = {
    question: "What is your favourite programming language? ",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    numberOfVotes: new Array(4).fill(0),
    registerNewAnswer() {
        let answer = checkNumber(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`), 'Câu trả lời không hợp lệ');
        if (answer > -1) {
            console.log()
            this.numberOfVotes[answer] = ++this.numberOfVotes[answer]
        }
        this.displayResults([5, 2, 3], "string");
        this.displayResults([1, 5, 3, 9, 6, 1], "array");
    },

    displayResults(data, type) {
        if (type === 'string') {
            let str = data.join(', ')
            console.log(`Poll results are ${str}`)
        } else {
            let array = data.join(', ')
            console.log(`[${array}]`)
        }
    }
};


const answerBtnElement = $("#answer");
const pollBtnElement = $("#poll");
const eventButtonAnswer = () => {
    pollBtnElement.addEventListener('click', function () {
        poll.registerNewAnswer();
    });
}

const init = () => {
    eventButtonAnswer();
}

init();

