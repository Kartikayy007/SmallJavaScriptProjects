let random = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#subt')
const input = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const reamaing = document.querySelector('.lastResult')
const lowhigh = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')
const nan = document.querySelector('.nan')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        console.log(random)
        const guess = parseInt(input.value)
        console.log(guess)
        validateguess(guess)
    })
}

function validateguess(guess) {
    if (isNaN(guess)) {
        nan.innerHTML = `<span>You entered an invalid number</span>`;
    } else if(guess < 1) {
        nan.innerHTML = `<span>enter number more than 1</span>`;
    } else if(guess > 100) {
        nan.innerHTML = `<span>enter number less than 100</span>`;
    } else {
        prevGuess.push(guess)
        if(numGuess === 11) {
            displaymessage(`gameOver RandomNumber was ${random}`)
        } else {
            checkguess(guess)
            displayguess(guess)
        }
    }
}

function checkguess(guess) {
    if(guess === random) {
        displaymessage(`you guessed right`)
        endgame()
    } else if(guess < random) {
        displaymessage(`number is too low`)
    } else if(guess > random) {
        displaymessage(`number is too high`)
    }
}

function displayguess(guess) {
    input.value = ''
    guessslot.innerHTML += `${guess}     `
    numGuess++
    reamaing.innerHTML = `${11 - numGuess}`
}

function displaymessage(message) {
    lowhigh.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
    input.value = ''
    input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id = "Newgame">New game</button>`
    startover.appendChild(p)
    playGame = false
    newgame()
}

function newgame() {
    const newgamebutton = document.querySelector('#Newgame')
    newgamebutton.addEventListener('click', function(e) {
        random = parseInt(Math.random() * 100 + 1)
        prevGuess = [];
        numGuess = 1;
        guessslot.innerHTML = ''
        reamaing.innerHTML = `${11 - numGuess}`
        input.removeAttribute('disabled', '')
        startover.removeChild(p)
        playGame = true
    })
}

