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

function makeClearBtn() {
  if (!document.querySelector("#btns #clear")) {
    const btns = document.querySelector("#btns");
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "CLEAR";
    clearBtn.id = "clear"
    btns.appendChild(clearBtn);
  }
}

function makeStopBtn() {
  if (!document.querySelector("#btns #stop")) {
    const btns = document.querySelector("#btns");
    const stopBtn = document.createElement("button");
    stopBtn.textContent = "STOP";
    stopBtn.id = "stop"
    btns.appendChild(stopBtn);

    stopBtn.addEventListener("click", () => {
      startBtn.id = "start";
      startBtn.textContent = "START"
      removeGrid();
      stopBtn.remove();
      document.querySelector("#btns #clear").remove();
    });
  }
}

startBtn.addEventListener("click", () => {
  if (startBtn.id === "start") {
    getGridSize();
    startBtn.id = "new-grid";
    startBtn.textContent = "NEW GRID";
    makeClearBtn();
    makeStopBtn();
  } else if (startBtn.id === "new-grid") {
    removeGrid();
    getGridSize();
  }
});