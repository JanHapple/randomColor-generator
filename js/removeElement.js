import { container } from  "./variables.js"

export const removeColor = (event) => {
    let colorToRemove = event.target.closest(".new-color");
    container.removeChild(colorToRemove);
};

