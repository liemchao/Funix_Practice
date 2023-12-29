const queryElement = (className) => {
    return document.querySelector(`${className}`);
}

const randomNumber = () => {
    return Math.trunc(Math.random() * 20) + 1;
}

let score = 20;
let highScore = 0;
let numberForGuess = randomNumber();
const scoreElement = queryElement('.score');
const highScoreElement = queryElement('.high-score');
const hiddenNumberElement = queryElement('.number-result');
const guess = queryElement('.guess');
const inputNumberElement = queryElement('.input-answer')
const changeGuessText = (message) => guess.textContent = message;

const btnAgain = () => {
    let btnAgainElement = queryElement('.btn-again');
    btnAgainElement.addEventListener('click', function () {
        score = 20;
        numberForGuess = randomNumber();
        hiddenNumberElement.textContent = '?';
        inputNumberElement.value = 0;
        guess.textContent = 'Starting guessing...';
        scoreElement.textContent = score;
        hiddenNumberElement.style.width = '2em';
        queryElement('body').style.background = '#000';
    })
}

const btnCheck = () => {
    let checkEvent = queryElement('.btn-check');

    checkEvent.addEventListener('click', function () {
        if (guess.textContent !== '🎉 Correct Number!' && guess.textContent !== 'You loose!') {
            let inputNumber = inputNumberElement.value;
            inputNumber = parseInt(inputNumber);
            if (score > 1) {
                if (inputNumber === numberForGuess) {
                    hiddenNumberElement.textContent = numberForGuess;
                    hiddenNumberElement.style.width = '4em';
                    changeGuessText('🎉 Correct Number!')
                    if (score > highScore) {
                        highScore = score
                        highScoreElement.textContent = highScore;
                    }
                    queryElement('body').style.background = '#60b347';

                }
                else if (inputNumber > numberForGuess) {
                    score--;
                    scoreElement.textContent = score;
                    changeGuessText('📈 Too high!')
                }
                else if (inputNumber < numberForGuess) {
                    score--;
                    scoreElement.textContent = score;
                    changeGuessText('📉 Too low!')
                }
                else
                    changeGuessText("You don't guess number!")
            } else if (score === 1) {
                if (inputNumber === numberForGuess) {
                    hiddenNumberElement.textContent = numberForGuess;
                    hiddenNumberElement.style.width = '4em';
                    changeGuessText('🎉 Correct Number!')
                    if (score > highScore) {
                        highScore = score
                        highScoreElement.textContent = highScore;
                    }
                    queryElement('body').style.background = '#60b347';

                }
                else {
                    score--;
                    scoreElement.textContent = score;
                    changeGuessText("You loose!")
                }
            }
        }
    })
}

const startProgram = () => {
    inputNumberElement.value = 0;
    scoreElement.textContent = score;
    highScoreElement.textContent = highScore;
    btnCheck();
    btnAgain();
}

startProgram();


