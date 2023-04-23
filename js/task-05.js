const inputRef = document.getElementById("name-input");
const inputResultRef = document.getElementById("name-output");

inputRef.addEventListener("input", (evt) => {
  inputResultRef.textContent = evt.target.value;
  if (inputResultRef.textContent === "") {
    inputResultRef.textContent = "Anonymous";
  }
});
