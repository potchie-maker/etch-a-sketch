function createGrid(num) {
  const container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);

  let containerSize = 500;
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

}

const startBtn = document.querySelector("#btns #start");
const resetBtn = document.querySelector("#btns #reset")

startBtn.addEventListener("click", () => {
  getGridSize();
  startBtn.id = "reset";
  startBtn.textContent = "RESET"
})
resetBtn.addEventListener("click", () => {
  removeGrid();
  getGridSize();
})