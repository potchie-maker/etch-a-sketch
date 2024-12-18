function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(num) {
  const container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);

  let containerSize = window.innerWidth * 0.4;
  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;

  let squareSize = containerSize/num;

  let isMouseDown = false;
  document.addEventListener("mouseup", () => isMouseDown = false);
  
  for (let i = 1; i <= (num * num); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    
    let opacity = 0;

    square.addEventListener("mousedown", () => {
      isMouseDown = true;
      square.style.backgroundColor = getRandomRGB();
      opacity = Math.min(opacity + 0.1, 1);
      square.style.opacity = opacity;
    });
    square.addEventListener("mouseover", () => {
      if (isMouseDown) {
        square.style.backgroundColor = getRandomRGB();
        opacity = Math.min(opacity + 0.1, 1);
        square.style.opacity = opacity;
      }
    });
    container.appendChild(square);
  }
}

let latestGridSize = 0;

function getGridSize() {
  let num = prompt("What grid size would you like? (Value cannot exceed 100)", "16");

  if (num === null || isNaN(num) || num <= 0 || num > 100) {
    alert("Please enter a valid number.");
    return false;
  }
  latestGridSize = num;
  return true;
}

function removeGrid() {
  const container = document.querySelector("#container");
  if (container) {
    container.remove();
  }
}

const startBtn = document.querySelector("#btns #start");

function makeClearBtn() {
  if (!document.querySelector("#btns #clear")) {
    const btns = document.querySelector("#btns");
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "CLEAR";
    clearBtn.id = "clear"
    btns.appendChild(clearBtn);

    clearBtn.addEventListener("click", () => {
      removeGrid();
      createGrid(latestGridSize);
    });
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

      const clearBtn = document.querySelector("#btns #clear");
      if (clearBtn) clearBtn.remove();
    });
  }
}

startBtn.addEventListener("click", () => {
  if (startBtn.id === "start") {
    if (getGridSize() === false) return;
    startBtn.id = "new-grid";
    startBtn.textContent = "NEW GRID";
    createGrid(latestGridSize);
    makeClearBtn();
    makeStopBtn();
  } else if (startBtn.id === "new-grid") {
    if (getGridSize() === false) return;
    removeGrid();
    createGrid(latestGridSize);
  }
});