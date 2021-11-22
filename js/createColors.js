import { input } from "./variables.js";

const createRandomNum = () => {
    const randomNum = Math.floor(Math.random() * (255 - 1) + 1);
    return randomNum;
  };

export let newColors;

export const createRandomColor = () => {
      let numberOfColors;
      let arrayOfColors = [];
      
      numberOfColors = Number(input.value);

      if (input.value == 0) {
        numberOfColors = 3;
      }
  
      for (let i=0; i < numberOfColors; i++) {
          let red = createRandomNum();
          let green = createRandomNum();
          let blue = createRandomNum();    
      
          let rgb = `rgb(${red}, ${green}, ${blue})`;
          arrayOfColors.push(rgb);
      };
    
      newColors = arrayOfColors;
      input.addEventListener('input', createRandomColor)
      return newColors;
  };
