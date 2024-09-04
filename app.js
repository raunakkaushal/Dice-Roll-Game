console.log("Raunak Kaushal ❤");
const clickMe = document.querySelector('#click-me');
const clickAgain = document.querySelector('#click-again');
const playAgain = document.querySelector('#play-again');
const playerBox = document.querySelector('#player-container');
const diceRoll = document.querySelector("#dice-roll");
const result = document.querySelector('#result');
const player1 = document.querySelector('#player-1');
const player2 = document.querySelector('#player-2');
const rules = document.querySelector('#rules');
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const rulesToggle = document.querySelector('#rules-toggle');
const diceLoad = document.querySelector('#dice-load');
const ruleClose = document.querySelector('.rules-close');
const diceMain = document.querySelector('#dice-main-load');
const scoreBox = document.querySelector('.score-box');
const score1Element = document.querySelector('#score-1');
const score2Element = document.querySelector('#score-2');
const winnerCard = document.querySelector('#winner-card');
const winnerName = document.querySelector('#winner-name');
const homeToggle = document.querySelector('#home-toggle');

const diceImages = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'
];

let score1 = 0;
let score2 = 0;
let winCount1 = 0;
let winCount2 = 0;

function rollDice() {
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    const value = randomIndex + 1;
    return { image: diceImages[randomIndex], value };
}

function updateDiceImages() {
    player1.style.display = 'block';
    player2.style.display = 'block';
    scoreBox.style.display = 'block';
    diceMain.style.display = 'none';
    diceRoll.style.display = 'block';
    playerBox.style.display = 'none';
    clickMe.style.display = 'none';
    clickAgain.style.display = 'none';
    result.textContent = '';

    setTimeout(() => {
        const { image: image1, value: value1 } = rollDice();
        const { image: image2, value: value2 } = rollDice();

        player1.style.backgroundImage = `url('${image1}')`;
        player2.style.backgroundImage = `url('${image2}')`;

        if (value1 > value2) {
            result.textContent = '🎲 Player 1 is Win 🎲';
            winCount1++;
            score1++;
        } else if (value2 > value1) {
            result.textContent = '🎲 Player 2 is Win 🎲';
            winCount2++;
            score2++;
        } else {
            result.textContent = '🎲 It\'s a Tie! 🎲';
        }

        score1Element.textContent = score1;
        score2Element.textContent = score2;

        diceRoll.style.display = 'none';
        playerBox.style.display = 'flex';
        clickAgain.style.display = 'inline-block';

        if (winCount1 >= 5) {
            showWinnerCard('Player 1');
        } else if (winCount2 >= 5) {
            showWinnerCard('Player 2');
        }
    }, 1000);
}

function showWinnerCard(player) {
    winnerName.textContent = `🎲${player} is Winner!🎲`;
    winnerCard.style.display = 'block';
    // scoreBox.style.display = 'none';
    clickMe.style.display = 'none';
    clickAgain.style.display = 'none';
    player1.style.display = 'none';
    player2.style.display = 'none';
    result.style.display = 'none';
}

function resetGame() {
    winCount1 = 0;
    winCount2 = 0;
    score1 = 0;
    score2 = 0;
    score1Element.textContent = score1;
    score2Element.textContent = score2;
    result.textContent = '';
    winnerCard.style.display = 'none';
    clickAgain.style.display = 'inline-block';
    result.style.display = 'block';
}

function toggleRules() {
    rules.style.display = (rules.style.display === 'none' || rules.style.display === '') ? 'block' : 'none';
}

function toggleMenu() {
    navMenu.classList.toggle('show');
}

function hideLoadingScreen() {
    setTimeout(() => {
        diceLoad.style.opacity = 0;
        setTimeout(() => {
            diceLoad.style.display = 'none';
        }, 500);
    }, 1500);
}

hideLoadingScreen();

clickMe.addEventListener('click', () => {
    diceMain.style.opacity = 0;
        // player1.style.display = 'block';
        // player2.style.display = 'block';
        result.style.display = 'block';
        // diceRoll.style.display = 'block';
        clickMe.style.display = 'none';
        playerBox.style.display = 'flex';
        clickAgain.style.display = 'inline-block';
        clickAgain.textContent = "Roll Dice"
        diceMain.style.display = 'none';
        // updateDiceImages();
        // diceMain.style.opacity = 1;
});

function homeBtnToggle() {
    window.location.href = 'index.html';
}


homeToggle.addEventListener('click', homeBtnToggle);
clickAgain.addEventListener('click', updateDiceImages);
playAgain.addEventListener('click', resetGame);
rulesToggle.addEventListener('click', toggleRules);
hamburger.addEventListener('click', toggleMenu);
ruleClose.addEventListener('click', toggleRules);
