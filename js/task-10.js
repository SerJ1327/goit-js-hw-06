function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRef = document.getElementById("controls");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesForNewElements = document.getElementById("boxes");

controlsRef.addEventListener("change", getValueOfInput);

function createBoxes(amount) {
  let sizeValue = 20;
  boxesForNewElements.innerHTML = "";
  for (let i = 0; i < amount; i += 1) {
    sizeValue += 10;
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = sizeValue + "px";
    newDiv.style.height = sizeValue + "px";
    newDiv.style.border = "1px solid black";
    boxesForNewElements.append(newDiv);
  }
}

function destroyBoxes() {
  boxesForNewElements.innerHTML = "";
}

function bottonAction(amount) {
  btnCreate.addEventListener("click", () => {
    createBoxes(amount);
  });
  btnDestroy.addEventListener("click", () => {
    destroyBoxes();
  });
}

function getValueOfInput(event) {
  if (event.target.nodeName === "INPUT") {
    let valueOfInput = event.target.value;
    bottonAction(valueOfInput);
  }
}
