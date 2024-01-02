// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const bodyColor = document.body;
// const changeColorBtn = document.querySelector(".change-color");
// const textColor = document.querySelector(".color");


// const changeColor = () => {
//   bodyColor.style.backgroundColor = textColor.textContent = getRandomHexColor();
// }

// changeColorBtn.addEventListener("click", changeColor);

// var-2

const refs = {
  bodyColor: document.body,
  changeColorBtn: document.querySelector(".change-color"),
  textColor: document.querySelector(".color"),
}

refs.changeColorBtn.addEventListener("click", changeColor);

function changeColor() {
  refs.bodyColor.style.backgroundColor = refs.textColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
