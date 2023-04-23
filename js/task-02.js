const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulRef = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const liRef = document.createElement("LI");
  liRef.textContent = ingredient;
  liRef.classList.add("item");
  fragment.appendChild(liRef);
}

ulRef.appendChild(fragment);
