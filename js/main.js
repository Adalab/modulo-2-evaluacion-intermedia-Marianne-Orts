"use strict";

// coger Elementos  de html
const numberElement = document.querySelector(".js-number");
const clueElement = document.querySelector(".js-clue");
const tryElement = document.querySelector(".js-try");

const game = function () {
  // coger numberElement value y convertirlo en entero ok
  let numberValue = parseInt(numberElement.value);

  // add values
  const resultValue = numberAValue + numberBValue;

  /* // check resultElement
  if (isNaN(resultValue)) {
    resultElement.classList.add("text--error");
    resultElement.innerHTML = "Datos inválidos";
  } else {
    // set resultElement value in resultElement input element
    resultElement.classList.remove("text--error");
    resultElement.innerHTML = resultValue;
  } */
};

// listener en input para jugar ok
numberElement.addEventListener("change", game);

// coger  boton del html ok
const testElement = document.querySelector(".js-test");

// borrar contenido inputs
const clear = function () {
  numberElement.value = "";
  clueElement.value = "";
  tryElement.value = "";
};

// listener en test para borrar contenidos
testElement.addEventListener("click", clear);
