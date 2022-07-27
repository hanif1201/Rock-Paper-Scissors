"strict mode";

myArray = ["rock", "paper", "scissors"];

function getComputersChoice() {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

let playerSelection = prompt("rock, paper or scissors").toLowerCase() ;
let computerSelection = getComputersChoice();

console.log(computerSelection);
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection === computerSelection) {
    console.log("There is a Tie");
  } else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "scissors" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    console.log(
      "Oh no!, you lost " + computerSelection + " " + "beats " + playerSelection
    );
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    console.log(
      "Congratulations!, You win " +
        playerSelection +
        " " +
        "beats " +
        computerSelection
    );
  } else {
    console.log("nah");
  }

  return ;
}

playRound(playerSelection, computerSelection);


function game() {
    //Play game 5 times
    for (let i = 0; i < 5; i++) {
    //   const playerSelection = playerPlay();
    //   const computerSelection = computerPlay();
    //   // Call playRound function, passing in newly returned values
    //   // from the playerPlay and computerPlay functions
    //   const currentRound = playRound(playerSelection, computerSelection);
    //   // Log our result
    //   console.log(currentRound);)

    console.log(playRound(playerSelection, computerSelection));
    
    }
 }








