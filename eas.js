const container = document.querySelector("#container");

function createGrid(num) {
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

createGrid(16);