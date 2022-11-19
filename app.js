const choices = ["Rock", "Paper", "Scissors"];
const playerSelection = window.prompt("Enter your choice:").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "Rock") {
        return "It is a tie";
    } else if (computerSelection == "Paper") {
        return "You lost!";
    } else {
        return "You Win!";
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
    console.log(playRound)
}



