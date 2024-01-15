function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const controls = document.getElementById("controls");
const boxesContainer = document.getElementById("boxes");

const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const input = controls.querySelector(".inp-num");

createButton.addEventListener("click", () => {
  const amount = input.value;

  destroyBoxes();

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
    input.value = "";
  }
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxSize = 30;
  const step = 10;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = boxSize + i * step;
    const color = getRandomHexColor();

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;
    box.style.marginRight = "16px";

    document.getElementById("boxes").appendChild(box);
  }
}

function destroyBoxes() {
  document.getElementById("boxes").innerHTML = "";
}
