"strict mode";

myArray = ["rock", "paper", "scissors"];

function getComputersChoice() {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

const playerSelection = "paper";
const computerSelection = getComputersChoice();

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
}

playRound(playerSelection, computerSelection);

function game() {
  for (let i = 0; i < 5; i++) {
    // your code here!

    playRound(playerSelection, computerSelection);
    console.log(game(playerSelection, computerSelection));
  }
}

game();
