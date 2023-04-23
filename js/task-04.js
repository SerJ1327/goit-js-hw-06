const counterBtnDecrement = document.querySelector('[data-action="decrement"]');
const counterBtnIncrement = document.querySelector('[data-action="increment"]');
const counterTotalValue = document.getElementById("value");

let counterValue = 0;

counterBtnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  counterTotalValue.textContent = counterValue;
});

counterBtnIncrement.addEventListener("click", () => {
  counterValue += 1;
  counterTotalValue.textContent = counterValue;
});
