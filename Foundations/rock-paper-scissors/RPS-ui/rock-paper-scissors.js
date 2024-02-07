function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice(){
    let num = getRandomInt(3);
    switch (num){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
};

function cleanPlayerChoice(playerChoice){
    let playerChoiceLower = playerChoice.toLowerCase();
    return playerChoiceLower.slice(0,1).toUpperCase() + playerChoiceLower.slice(1);
};

function evaluateRound(computerChoice, playerChoice){
    if (computerChoice == playerChoice){return "You Tied, both played "+ playerChoice}
    switch (playerChoice){
        case "Rock":
            if (computerChoice == "Paper"){return "You Lose! Paper beats Rock"}
            return "You Win! Rock beats Scissors";
        case "Paper":
            if (computerChoice == "Scissors"){return "You Lose! Scissors beats Paper"}
            return "You Win! Paper beats Rock";
        case "Scissors":
            if (computerChoice == "Rock"){return "You Lose! Rock beats Scissors"}
            return "You Win! Scissors beats Paper";
    }
};

function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    let result =  evaluateRound(computerChoice, playerChoice);
    return result
}

/* 1. Create score variables and put them into webpage
   2. Change playRound to run from a given player choice.
   3. Add play round to newly created event listeners for the buttons.  
*/

let playerScore = 0;
let computerScore = 0;

const scores = document.querySelector('.scores');
scores.textContent = "You have " + playerScore + " points. The computer has " + computerScore + " points";

const roundResult = document.querySelector('.roundResult');

const test = document.querySelector('#checking')
//const rock = document.querySelector('#rock');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = cleanPlayerChoice(button.id);
        let result = playRound(playerChoice);
        if (result.includes("Win")){
            playerScore += 1;
        } else if (result.includes("Lose")){
            computerScore += 1;
        };
        roundResult.textContent = result;
        scores.textContent = "You have " + playerScore + " points. The computer has " + computerScore + " points";
    });
});

/*
rock.addEventListener('click', () => {
    let playerChoice = cleanPlayerChoice(rock.id);
        let result = playRound(playerChoice);
        if (result.includes("Win")){
            playerScore += 1;
        } else if (result.includes("Lose")){
            computerScore +=1;
        };
        roundResult.textContent = result;
        scores.textContent = "You have " + playerScore + " points. The computer has " + computerScore + " points";
        test.textContent = rock.id;
});
*/
