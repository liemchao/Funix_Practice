'use strict';

const $ = (cssSelector) => {
    return document.querySelector(cssSelector);
}

const rollDice = () => {
    return Math.trunc(Math.random() * 6 + 1);
}

const changeImg = (number) => {
    dice.src = `dice-${number}.png`;
}

const activePlayer = () => {
    currentScore = 0;
    player_0.currentScoreE.textContent = 0;
    player_1.currentScoreE.textContent = 0;
    player_0.isPlay = !player_0.isPlay;
    player_1.isPlay = !player_1.isPlay;
    if (player_0.isPlay) {
        player_0.playerE.classList.add('player--active');
        player_1.playerE.classList.remove('player--active');
    } else if (player_1.isPlay) {
        player_0.playerE.classList.remove('player--active');
        player_1.playerE.classList.add('player--active');
    } else {
        alert("Game is error. Please f5 to reset!");
    }
}

const checkClass = (element, classForCheck) => {
    return element.classList.contains(classForCheck);
}

const resetGame = () => {
    currentScore = 0;
    player_0.currentScoreE.textContent = 0;
    player_0.scoreE.textContent = 0;
    player_0.nameE.style.color = "#333";

    player_1.currentScoreE.textContent = 0;
    player_1.scoreE.textContent = 0;
    player_1.nameE.style.color = "#333";

    dice.classList.add('hidden');

    haveWinner = false;
    if (document.querySelector('.bg-dark')) {
        document.querySelector('.bg-dark').classList.remove('bg-dark');
    }
}


// Player 0
const player_0 = {
    playerE: $('.player--0'),
    nameE: $('#name--0'),
    scoreE: $('#score--0'),
    currentScoreE: $('#current--0'),
    isPlay: true,
    score: 0,

}

// Player 1
const player_1 = {
    playerE: $('.player--1'),
    nameE: $('#name--1'),
    scoreE: $('#score--1'),
    currentScoreE: $('#current--1'),
    isPlay: false,
    score: 0,
}

console.log([player_0.scoreE]);


// button element
const newButtonElement = $('.btn--new');
const rollButtonElement = $('.btn--roll');
const holdButtonElement = $('.btn--hold');

// roll dice image
const dice = $('.dice');

// 
let currentScore = 0;
let haveWinner = false;

// Logic for game
const resetTurnPlayer = () => {
    player_0.isPlay = true;
    player_1.isPlay = false;
    if (!checkClass(player_0.playerE, 'player--active')) {
        player_0.playerE.classList.add('player--active');
        player_1.playerE.classList.remove('player--active');
    }
}

const eventRollBtn = () => {
    rollButtonElement.addEventListener('click', function () {
        if (!haveWinner) {
            dice.classList.remove('hidden');
            let numberDice = rollDice();
            changeImg(numberDice);
            if (numberDice === 1) {
                activePlayer();
            } else {
                currentScore += numberDice;
                if (player_0.isPlay) {
                    player_0.currentScoreE.textContent = currentScore;
                } else {
                    player_1.currentScoreE.textContent = currentScore;
                }
            }
        }
    })

}

const eventHoldBtn = () => {
    holdButtonElement.addEventListener('click', function () {
        if (!haveWinner) {
            if (player_0.isPlay) {
                player_0.score += currentScore
                if (player_0.score >= 100) {
                    player_0.playerE.classList.add('bg-dark');
                    player_0.nameE.style.color = "#c7365f";
                    haveWinner = true;
                }
                player_0.scoreE.textContent = player_0.score;
            } else {
                player_1.score += currentScore
                if (player_1.score >= 100) {
                    player_1.playerE.classList.add('bg-dark');
                    player_1.nameE.style.color = "#c7365f";
                    haveWinner = true;
                }
                player_1.scoreE.textContent = player_1.score;
            }
            activePlayer();

        }
    })
}

const eventNewBtn = () => {
    newButtonElement.addEventListener('click', function () {
        resetTurnPlayer();
        resetGame();
    })
}

const start = () => {
    resetGame();
    eventRollBtn();
    eventHoldBtn();
    eventNewBtn();

}

start();

