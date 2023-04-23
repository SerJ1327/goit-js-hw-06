function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const resulOfGenerateColorRef = document.querySelector(".color");
const buttonToGenerateColorRef = document.querySelector(".change-color");

buttonToGenerateColorRef.addEventListener("click", onGenerateColor);

function onGenerateColor(evt) {
  const color = getRandomHexColor();
  console.log(color);
  document.body.style.backgroundColor = color;
  resulOfGenerateColorRef.textContent = color;
}
