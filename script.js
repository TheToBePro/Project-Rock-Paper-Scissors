// The Rock Paper Scissors game is between two people were they chioce eithier rock paper or scissors
//it have ten result
// make the computer one of the players where it select RANDOM choice
// make the player input his chioce Rock Paper or scissors
//
//make game choice
/*
const Btns = document.querySelectorAll("button");
const playerScore = document.querySelector(".playerScore");
let playerSelection = "";
Btns.forEach((Btn) => {
  Btn.addEventListener("click", function () {
    playerSelection = Btn.className;
    logger(playerSelection);
  });
});
function logger(classname) {
  console.log(classname);
  const gameChoices = ["ROCK", "PAPER", "SCISSORS"];

  //function to get computer choice
  function getComputerChoice() {
    let choice = gameChoices[Math.floor(Math.random() * 3)];
    return choice;
  }
  let computerSelection = getComputerChoice();

  //function for detect the winner
  function playRound(classname, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
      result = "it is tie";
    } else if (
      (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK") ||
      (playerSelection === "SCISSOR" && computerSelection === "PAPER")
    ) {
      result = "player Win";
    } else if (
      (computerSelection === "ROCK" && playerSelection === "SCISSOR") ||
      (computerSelection === "PAPER" && playerSelection === "ROCK") ||
      (computerSelection === "SCISSOR" && playerSelection === "PAPER")
    ) {
      result = "Computer Win";
    }
    return result;
  }
  console.log(playRound(classname, computerSelection));
}
*/
const Btns = document.querySelectorAll("button");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const UpdateScore = document.querySelector(".UpdateScore");
const Winning = document.querySelector(".Winner");
let playerSelection = "";
let playerPoints = 0;
let computerPoints = 0;
let round = 1;
let winner = "";

// function to get computer choice
function getComputerChoice() {
  const gameChoices = ["ROCK", "PAPER", "SCISSORS"];
  return gameChoices[Math.floor(Math.random() * 3)];
}

// function to update score
function updateScore(result) {
  if (result === "player Win") {
    playerPoints++;
    playerScore.textContent = playerPoints;
  } else if (result === "Computer Win") {
    computerPoints++;
    computerScore.textContent = computerPoints;
  }
}

// function to check the winner after every round
function checkWinner() {
  if (playerPoints === 5) {
    winner = "Player";
    Winning.textContent = `The winner is ${winner}`;
    resetGame();
  } else if (computerPoints === 5) {
    winner = "Computer";
    Winning.textContent = `The winner is ${winner}`;
    resetGame();
  }
}

// function to reset the game state
function resetGame() {
  playerPoints = 0;
  computerPoints = 0;
  round = 1;
  playerScore.textContent = playerPoints;
  computerScore.textContent = computerPoints;
  winner = "";
}

// function to play one round of the game
function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = "it is tie";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    result = "player Win";
  } else {
    result = "Computer Win";
  }
  updateScore(result);

  UpdateScore.textContent = `Move ${round}: ${result} (${playerSelection} vs ${computerSelection})`;
  round++;
  checkWinner();
}

// event listener for player selection
Btns.forEach((Btn) => {
  Btn.addEventListener("click", function () {
    if (winner === "") {
      playerSelection = Btn.className.toUpperCase();
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
    }
  });
});
