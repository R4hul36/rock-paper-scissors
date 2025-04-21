


const getComputerChoice = function () {
    let noOfChoices = 3
    let randomNum = Math.floor(Math.random() * noOfChoices)

    // below r = rock, p = paper and s = scissors
    return randomNum === 0 ? "r" : randomNum === 1 ? "p": "s";
    
}

const getHumanChoice = function () {
    userChoice = prompt("Type your choice, rock = r | paper = p | scissors = s");
    return userChoice;
}



const playGame = function () {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 5;
    const playGround = function (humanChoice, computerChoice) {
        // console.log(humanChoice, computerChoice);
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == computerChoice) {
            return alert("It's a tie");
        }

        if (humanChoice == "r" && computerChoice == "s" || humanChoice == "p" && computerChoice == "r" || humanChoice == "s" && computerChoice == "p" ) {
            humanScore +=1;
            return alert(`player wins! ${humanChoice} beats ${computerChoice}`)
        }else {
            computerScore+=1;
            return alert("Computer wins");
        }

    }
    

    for (let i =0; i<rounds; i++) {
        const computerSelection =getComputerChoice();
        const humanSelection = getHumanChoice();
        playGround(humanSelection, computerSelection);
        
    }
    if(humanScore > computerScore) {
        return alert(`player wins! score: player:${humanScore} | computer: ${computerScore}`);
    }else if (humanScore < computerScore) {
        return alert(`compuer wins! score: player:${humanScore} | computer: ${computerScore}`);
    }else {
        return alert("It's a tie");
    }
}


playGame();