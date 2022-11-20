const choices = ["Rock", "Paper", "Scissors"];

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
            } else {
                console.log("You Win")
            }
            break;
        case "Paper":
            if (computerSelection === "Scissors") {
                console.log("You lose!")
            } else {
                console.log("You Win")
            }
            break;
        case "Scissors":
            if (computerSelection === "Rock") {
                console.log("You lose!")
            } else {
                console.log("You Win")
            }
            break;
        default:
            console.log("player weapon not found")
            break;
    }
}

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        if (i === 1) {
            return "You have 1 point";
        } 
        else if (i === 2) {
            return "You have 2 points";
        }
        else if (i === 3) {
            return "You have 3 points";
        }
        else if (i === 4) {
            return "You have 4 points";
        }
        else {
            return "You have 5 points";
        }
    }
}



