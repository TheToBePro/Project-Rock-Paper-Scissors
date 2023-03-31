// The Rock Paper Scissors game is between two people were they chioce eithier rock paper or scissors
//it have ten result 
// make the computer one of the players where it select RANDOM choice
// make the player input his chioce Rock Paper or scissors
// 
const gameChoices = [
    "ROCK",
    "PAPER",
    "SCISSOR"
]
function getComputerChoice() {
    let chioce = gameChoices[Math.floor(Math.random() * 3)];
    return chioce;
}
let computerSelection = getComputerChoice();
let playerChoice = prompt("please input your choice: ");

while(!gameChoices.includes(playerChoice.toUpperCase())){
     playerChoice = prompt("Wrong choice rock, paper, scissers: ");
}

let playerSelection = playerChoice.toUpperCase();

function playRound(playerSelection, computerSelection) {
    let result;
    if(playerSelection === computerSelection){
         result = "it is tie";
    }else if(playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        result = "player Win";
    }else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
        result = "player Win";
    }else if(playerSelection === "SCISSOR" && computerSelection === "PAPER"){
        result = "player Win";
    }else if(computerSelection === "ROCK" && playerSelection === "SCISSOR"){
        result = "Computer Win";
    }else if(computerSelection === "PAPER" && playerSelection === "ROCK"){
        result = "Computer Win";
    }else if(computerSelection === "SCISSOR" && playerSelection === "PAPER"){
        result = "Computer Win";
    }
    return result;
}
console.log("player chioce: ",playerSelection);
console.log("computer chioce:", computerSelection);
console.log(playRound(playerSelection, computerSelection));