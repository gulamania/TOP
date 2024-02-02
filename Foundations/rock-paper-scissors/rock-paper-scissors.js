function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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
}

function cleanPlayerChoice(playerChoice){
    let playerChoiceLower = playerChoice.toLowerCase();
    return playerChoiceLower.slice(0,1).toUpperCase() + playerChoiceLower.slice(1);
}

function evaluateRound(computerChoice, playerChoice){
    if (computerChoice == playerChoice){return "You Tied, both played "+ playerChoice}
    switch (playerChoice){
        case "Rock":
            if (computerChoice == "Paper"){return "You Lose! Paper beats Rock"}
            return "You Win! Rock beats Scissors"
        case "Paper":
            if (computerChoice == "Scissors"){return "You Lose! Scissors beats Paper"}
            return "You Win! Paper beats Rock"
        case "Scissors":
            if (computerChoice == "Rock"){return "You Lose! Rock beats Scissors"}
            return "You Win! Scissors beats Paper"
    }
}

let playerChoice = cleanPlayerChoice(prompt("rock paper or scissors?"));
let computerChoice = getComputerChoice();
console.log(evaluateRound(computerChoice, playerChoice))
