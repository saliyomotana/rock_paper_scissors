const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}


const playerChoices = document.querySelectorAll('.options')
for (let i = 0; i < playerChoices.length; i++) {
    playerChoices[i].addEventListener("click", (e) => {
        playRound(e.target.value, getComputerChoice())
        //console.log(e.target.value, getComputerChoice())
    });
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    if (computerSelection === playerSelection) {
        return "Tie"
    }
    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Paper") {
                console.log("You lose!")
                computerScore++;
            } else {
                console.log("You Win")
                playerScore++;
            }
            break;
        case "Paper":
            if (computerSelection === "Scissors") {
                console.log("You lose!")
                computerScore++;
            } else {
                console.log("You Win")
                playerScore++;
            }
            break;
        case "Scissors":
            if (computerSelection === "Rock") {
                console.log("You lose!")
                computerScore++;
            } else {
                console.log("You Win")
                playerScore++;
            }
            break;
        default:
            console.log("player weapon not found")
            break;
    }
}

function isGameOver(playerScore, computerScore) {
    console.log(isGameOver);
    if (playerScore || computerScore === 5) {
        return true
    } else {
        return false
    }
}