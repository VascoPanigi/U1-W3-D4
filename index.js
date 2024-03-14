const startGameButton = document.getElementById("start-game-btn");
const newNumberButton = document.getElementById("new-number-btn");
const board = document.querySelector(".board");

const newNumber = () => Math.ceil(Math.random() * 76);

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

const numberExtraction = () => {
  const tombolaNumCell = document.querySelectorAll(".cell");
  console.dir(tombolaNumCell);
  const randomNumExtraction = newNumber();
  //   console.log(randomNumExtraction)
  tombolaNumCell.forEach((cell) => {
    if (parseInt(cell.innerText) === randomNumExtraction) {
      console.log(randomNumExtraction);
      cell.classList.add("issued");
    } else {
      console.log("unlucky, try again");
    }
  });
};

// && !cell.classList.contains("issued")
