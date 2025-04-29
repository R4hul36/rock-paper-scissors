const getComputerChoice = function () {
  let noOfChoices = 3
  let randomNum = Math.floor(Math.random() * noOfChoices)

  // below r = rock, p = paper and s = scissors
  return randomNum === 0 ? 'rock' : randomNum === 1 ? 'paper' : 'scissors'
}

const playGame = function () {
  let humanScore = 0
  let computerScore = 0

  const playRound = function (humanChoice, computerChoice) {
    //game stats section
    const section = document.querySelector('.result')
    const message = document.createElement('p')
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice == computerChoice) {
      message.textContent = "It's a tie!"
      section.appendChild(message)
      return
    }

    if (
      (humanChoice == 'rock' && computerChoice == 'scissors') ||
      (humanChoice == 'paper' && computerChoice == 'rock') ||
      (humanChoice == 'scissors' && computerChoice == 'paper')
    ) {
      humanScore += 1
      message.textContent = `player wins! ${humanChoice} beats ${computerChoice} 
      \nPlayer: ${humanScore} | Computer: ${computerScore}`
      message.style.whiteSpace = 'pre-line'
      section.appendChild(message)
    } else {
      computerScore += 1
      message.textContent = `Computer wins! ${computerChoice} beats ${humanChoice} 
      \nPlayer: ${humanScore} | Computer: ${computerScore}`
      message.style.whiteSpace = 'pre-line'
      section.appendChild(message)
    }

    if (humanScore === 5 || computerScore === 5) {
      checkGameWinner(humanScore, computerScore, section)
      humanScore = 0
      computerScore = 0
      section.textContent = ''
    }
  }

  const checkGameWinner = function (humanScore, computerScore, section) {
    if (humanScore > computerScore) {
      return alert(
        `player wins! player: ${humanScore} | computer: ${computerScore}`
      )
    } else if (humanScore < computerScore) {
      return alert(
        `computer wins! computer: ${computerScore} | player: ${humanScore} `
      )
    }
  }

  //buttons

  const buttons = document.querySelectorAll('.btn')

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let humanChoice = e.target.textContent
      let computerChoice = getComputerChoice()
      playRound(humanChoice, computerChoice)
    })
  })

  // results section
}

playGame()
