import { button, container } from "./variables.js";
import { newColors, createRandomColor } from "./createColors.js";
import { removeColor } from "./removeElement.js";

export const createNewElement = () => {
  createRandomColor();
  for (let i=0; i < newColors.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("new-color");
    newDiv.textContent = newColors[i];
    newDiv.style.background = newColors[i];
    container.appendChild(newDiv);

    const newSpan = document.createElement("span");
    newSpan.classList.add("delete-color");
    newSpan.textContent = "X";
    newSpan.style.background = "grey";
    newSpan.style.color = "white";
    newDiv.appendChild(newSpan);
    newSpan.addEventListener('click', removeColor);
  }

  button.addEventListener('click', createNewElement);   
};


export const init = () => {
  createRandomColor();

  for (let i=0; i < 3; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("new-color");
    newDiv.textContent = newColors[i];
    newDiv.style.background = newColors[i];
    container.appendChild(newDiv);

    const newSpan = document.createElement("span");
    newSpan.classList.add("delete-color");
    newSpan.textContent = "X";
    newSpan.style.background = "grey";
    newSpan.style.color = "white";
    newDiv.appendChild(newSpan);
    newSpan.addEventListener('click', removeColor);
  }
};

