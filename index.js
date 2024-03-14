const startGameButton = document.getElementById("start-game-btn");
const newNumberButton = document.getElementById("new-number-btn");
const board = document.querySelector(".board");

const handleStart = () => {
  if (board.children.length > 0) {
    alert("You already have a board!");
  } else {
    for (i = 0; i < 76; i++) {
      const newBoardCell = document.createElement("div");
      newBoardCell.className = "cell";
      newBoardCell.innerText = i + 1;
      board.appendChild(newBoardCell);
    }
  }
};
