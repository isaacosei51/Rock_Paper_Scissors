const playerText = document.querySelector("#player");
const computerText = document.querySelector("#computer");
const resultText = document.querySelector("#result");
const choices = document.querySelectorAll(".playerChoice");
let player;
let computer;
let result;

choices.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player :${player}`;
    computerText.textContent = `Computer :${computer}`;
    resultText.textContent = winner();
  })
);

const computerTurn = () => {
  const random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
};

const winner = () => {
  if (player === computer) {
    return "Is a draw!";
  } else if (computer === "Rock") {
    return player === "Paper" ? "Player Wins!" : "Player Lose!";
  } else if (computer === "Paper") {
    return player === "Scissors" ? "Player Wins!" : "Player Lose!";
  } else if (computer === "Scissors") {
    return player === "Rock" ? "Player Wins!" : "Player Lose!";
  }
};
