"use strict";
// hacer que al recargar haya numero aleaotorio
const aleatoryNumber = getRandomNumber(100);
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(`Mi número aleatorio es ${aleatoryNumber}`);

// coger Elementos  de html
const numberElement = document.querySelector(".js-number");
const clueElement = document.querySelector(".js-clue");
const tryElement = document.querySelector(".js-try");
const testElement = document.querySelector(".js-test");

function game() {
  // coger numberElement value y convertirlo en entero ok
  let numberValue = parseInt(numberElement.value);
  console.log(clueElement.value);
  if (aleatoryNumber === numberValue) {
    clueElement.value = "Has acertado";
  } else if (aleatoryNumber < numberValue) {
    clueElement.value = "Demasiado alto";
  } else if (aleatoryNumber > numberValue) {
    clueElement.value = "Demasiado bajo";
  } else {
    clueElement.value = "El número debe estar entre 1 y 100";
  }
}

// listener en boton
testElement.addEventListener("click", game);
