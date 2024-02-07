let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")
let choice = document.querySelector('.choice')
let playerChoiceScreen = document.querySelector('.choice-player')
let computerChoiceScreen = document.querySelector('.computerChoiceScreen')
let playerChoice;
let computerChoiceValue;
let computerScoreScreen = document.querySelector('#computerScore')
let playerScoreScreen = document.querySelector('#playerScore')
let computerScore = 0;
let playerScore = 0;
let outcome = document.querySelector('#outcome')
function computerChoice() {
    return computerChoiceValue = Math.floor(Math.random() * 3)
}

rock.addEventListener('click', () => {
    clearClasses()
    playerChoice = 'rock'
    playerChoiceScreen.innerHTML = '🗿'
    playRound()
})

paper.addEventListener('click', () => {
    clearClasses()
    playerChoice = 'paper'
    playerChoiceScreen.innerHTML = '🧻'
    playRound()
})

scissors.addEventListener('click', () => {
    clearClasses()
    playerChoice = 'scissors'
    playerChoiceScreen.innerHTML = '✂️'
    playRound()
})

// 0 = rock
// 1 = paper
// 2 = scissors


function playRound() {
    computerChoice()
   function returnPlayerChoice() {
    if (playerChoice == 'rock' && computerChoiceValue == 0) {
        computerChoiceScreen.innerHTML = '🗿'
        playerChoiceScreen.classList.add('tie')
        computerChoiceScreen.classList.add('tie')
    } else if (playerChoice == 'rock' && computerChoiceValue == 1) {
        computerChoiceScreen.innerHTML = '🧻'
        playerChoiceScreen.classList.add('lose')
        computerChoiceScreen.classList.add('win')
        computerScore++;
    } else if (playerChoice == 'rock' && computerChoiceValue == 2) {
        computerChoiceScreen.innerHTML =  '✂️'
        playerChoiceScreen.classList.add('win')
        computerChoiceScreen.classList.add('lose')
        playerScore++;
    } else if (playerChoice == 'paper' && computerChoiceValue == 0) {
        computerChoiceScreen.innerHTML = '🗿'
        playerChoiceScreen.classList.add('win')
        computerChoiceScreen.classList.add('lose')
        playerScore++;
    } else if (playerChoice == 'paper' && computerChoiceValue == 1) {
        computerChoiceScreen.innerHTML = '🧻'
        playerChoiceScreen.classList.add('tie')
        computerChoiceScreen.classList.add('tie')
    } else if (playerChoice == 'paper' && computerChoiceValue == 2) {
        computerChoiceScreen.innerHTML =  '✂️'
        playerChoiceScreen.classList.add('lose')
        computerChoiceScreen.classList.add('win')
        computerScore++;
    } else if (playerChoice == 'scissors' && computerChoiceValue == 0) {
        computerChoiceScreen.innerHTML = '🗿'
        playerChoiceScreen.classList.add('lose')
        computerChoiceScreen.classList.add('win')
        computerScore++;
    } else if (playerChoice == 'scissors' && computerChoiceValue == 1) {
        computerChoiceScreen.innerHTML = '🧻'
        playerChoiceScreen.classList.add('win')
        computerChoiceScreen.classList.add('lose')
        playerScore++;
    } else if (playerChoice == 'scissors' && computerChoiceValue == 2) {
        computerChoiceScreen.innerHTML =  '✂️'
        playerChoiceScreen.classList.add('tie')
        computerChoiceScreen.classList.add('tie')
    }
   }
   returnPlayerChoice()
   function updateScore() {
     computerScoreScreen.innerHTML = `${computerScore}`;
     playerScoreScreen.innerHTML =  `${playerScore}`;
   }
   updateScore()
}

function clearScreen(){
    setTimeout(()=> {
        computerChoiceScreen.innerHTML = ''
        playerChoiceScreen.innerHTML = ''
    },1500)
}

function clearClasses(){
    computerChoiceScreen.classList.remove('won')
    computerChoiceScreen.classList.remove('tie')
    computerChoiceScreen.classList.remove('lose')
    playerChoiceScreen.classList.remove('tie')
    playerChoiceScreen.classList.remove('won')
    playerChoiceScreen.classList.remove('lose')
}

