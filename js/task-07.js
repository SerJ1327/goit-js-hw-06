const inputRef = document.getElementById("font-size-control");
const inputResult = document.getElementById("text");

inputRef.addEventListener("input", (evt) => {
  inputResult.style.fontSize = `${evt.target.value}px`;
});
