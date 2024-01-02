const inputText = document.getElementById("name-input");
const outputText = document.getElementById("name-output");

// 1-st var

// const getInputValue = (event) => {
//     if (event.currentTarget.value.trim() !== "") {
//         outputText.textContent = event.currentTarget.value.trim();
//     } else {
//         outputText.textContent = "Anonymous";
//     }
// }

// 2-nd var

const getInputValue = ({ currentTarget }) =>
  (outputText.innerText =
    currentTarget.value.trim() !== ''
      ? currentTarget.value.trim()
      : "Anonymous");

inputText.addEventListener('input', getInputValue);
