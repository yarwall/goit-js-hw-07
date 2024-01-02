const createdBox = document.getElementById(`boxes`);
const createBtn = document.querySelector(`button[data-create]`);
const destroyBtn = document.querySelector(`button[data-destroy]`);
const inputNumber = document.querySelector(`[type="number"]`);

createBtn.addEventListener('click', () => {
  createBoxes(Number(inputNumber.value));
})

destroyBtn.addEventListener("click", () => {
  inputNumber.value = '';
  return createdBox.innerHTML = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  console.log(amount);
   if (amount < Number(inputNumber.min) || amount > Number(inputNumber.max)) {
     return alert('Please enter number from 1 to 100');
   }

  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  inputNumber.value = '';
  return createdBox.append(...boxes);
}
