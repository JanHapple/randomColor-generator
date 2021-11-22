import { createNewElement, init } from "./createElements.js";
import { button }from "./variables.js";

init();
button.addEventListener('click', createNewElement);