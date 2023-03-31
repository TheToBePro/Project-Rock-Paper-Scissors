// The Rock Paper Scissors game is between two people were they chioce eithier rock paper or scissors
//it have ten result 
// make the computer one of the players where it select RANDOM choice
// make the player input his chioce Rock Paper or scissors
// 
//make game choice
const gameChoices = [
    "ROCK",
    "PAPER",
    "SCISSOR"
]

//function to get computer choice 
function getComputerChoice() {
    let chioce = gameChoices[Math.floor(Math.random() * 3)];
    return chioce;
}

let computerSelection = getComputerChoice();

// getting player choice 
let playerChoice = prompt("please input your choice: ");

// loop until get right choice
while(!gameChoices.includes(playerChoice.toUpperCase())){
     playerChoice = prompt("Wrong choice rock, paper, scissers: ");
}

let playerSelection = playerChoice.toUpperCase();

//function for detect the winner
function playRound(playerSelection, computerSelection) {
    let result;
    if(playerSelection === computerSelection){
         result = "it is tie";
    }else if(playerSelection === "ROCK" && computerSelection === "SCISSOR"
            || playerSelection === "PAPER" && computerSelection === "ROCK"
            ||playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        
                result = "player Win";
    }else if(computerSelection === "ROCK" && playerSelection === "SCISSOR"
            || computerSelection === "PAPER" && playerSelection === "ROCK"
            || computerSelection === "SCISSOR" && playerSelection === "PAPER"){
        
                result = "Computer Win";
    }
    return result;
}
console.log("player chioce: ",playerSelection);
console.log("computer chioce:", computerSelection);
console.log(playRound(playerSelection, computerSelection));