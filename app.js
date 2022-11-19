const choices = ["Rock", "Paper", "Scissors"];
const playerSelection = window.prompt("Enter your choice:").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function playRound(playerSelection, computerSelection) {

        if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                return "You Lose!";
        } else if (computerSelection === "Scissors") {
                return "You Win!";
        } else {
                return "It is a tie";
        }
        } else if (playerSelection === "Paper") {
            if (computerSelection === "Scissors") {
                return "You Lose!";
        } else if (computerSelection === "Rock") {
                return "You Win!";
        } else {
                return "It is a tie";
        }
        } else if (playerSelection === "Scissors") {
            if (computerSelection === "Rock") {
            return "You Lose!";
        } else if (computerSelection === "Paper") {
                return "You Win!";
        } else {
                return "It is a tie";
        }
        }
}

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        if (i = 1) {
            return "You have 1 point";
        } 
        else if (i = 2) {
            return "You have 2 points";
        }
        else if (i = 3) {
            return "You have 3 points";
        }
        else if (i = 4) {
            return "You have 4 points";
        }
        else {
            return "You have 5 points";
        }
    }
}



