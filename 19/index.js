import JSConfetti from 'js-confetti'
const word = 'santa' 
const wordArr = word.split('')
const wordDisplay = document.getElementById('word-display')
document.addEventListener('submit', handleGuess)

function renderSpaces() {
    const wordHtml = wordArr.map(() => {
        return `<span class="letter">-</span>`
    })
    wordDisplay.innerHTML = wordHtml.join('')
}
renderSpaces()

function renderGuess(arr) {
    const wordHtml = arr.map((letter) => {
        return `<span class="letter">${letter}</span>`
    })
    wordDisplay.innerHTML = wordHtml.join('')
}

let currentState = Array(word.length).fill('❄️');
let correctGuesses = [];
    
function handleGuess(e) {
    e.preventDefault()
/**
 * Debug Challenge:
 * 1. There are loads of problems with the 
 *    code below. Find them and fix them!
 **/
    
    /* bugs begin 🦠*/ 
    let input = document.getElementById('user-input') // incorrect id target
    let guess = input.value.toLowerCase(); // incorrect selector - id instead of value, update to user toLowerCase
    const guessArr = guess.split('') // bad split pattern   
    wordArr.forEach((letter, idx) => { // utilize index parameter
        if (guessArr.includes(letter)) { // inprove readability with .includes method
            currentState[idx] = letter;
            if (!correctGuesses.includes(letter)) { // check if letter already correctly guessed
                correctGuesses.push(letter);
            }
        }
    })   
    /* bugs end 🦠*/ 
    renderGuess(currentState)
    checkWin(currentState) // change to pass currentState array
    input.value = ''
}

function checkWin(guess) {
    guess = guess.join(''); // handle currentState array
    if (word === guess) {
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti({
            emojis: ['🧑‍🎄', '🎅'],
            emojiSize: 50,
            confettiNumber: 60,
            confettiRadius: 6,
        })
        jsConfetti.addConfetti()
    }
}
