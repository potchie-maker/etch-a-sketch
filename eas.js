function createGrid(num) {
  const container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);

  let containerSize = 700;
  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;

  let squareSize = containerSize/num;

  for (let i = 1; i <= (num * num); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
}

function getGridSize() {
  let num = parseInt(prompt("What grid size would you like? (Value cannot exceed 100)"));

  if (num === 0 || num > 100 || !num) {
    alert("Please enter a valid number.");
    return getGridSize();
  }
  createGrid(num);
}

function removeGrid() {
  const square = document.querySelectorAll("#container .square");
  square.forEach((box) => box.remove());
  document.querySelector("#container").remove();
}

const startBtn = document.querySelector("#btns #start");

startBtn.addEventListener("click", () => {
  if (startBtn.id === "start") {
    getGridSize();
    startBtn.id = "reset";
    startBtn.textContent = "RESET"
  } else if (startBtn.id === "reset") {
    removeGrid();
    getGridSize();
  }
});