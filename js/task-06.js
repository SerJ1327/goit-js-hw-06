const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", (evt) => {
  if (evt.target.value.length === 6) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.toggle("invalid");
    inputRef.classList.remove("valid");
  }
});
