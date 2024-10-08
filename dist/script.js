"use strict";
// Seleccionar los elementos del DOM
const changeColorBtn = document.getElementById('change-color-btn');
const changeTextBtn = document.getElementById('change-text-btn');
const boxes = document.querySelectorAll('.box');
// Función para cambiar el color de las cajas
function changeBoxColors() {
    boxes.forEach(box => {
        if (box.style.backgroundColor === 'lightgray') {
            box.style.backgroundColor = 'lightblue';
        }
        else {
            box.style.backgroundColor = 'lightgray';
        }
    });
}
// Función para cambiar el texto de las cajas
function changeBoxText() {
    boxes.forEach((box, index) => {
        box.textContent = `Nuevo Texto ${index + 1}`;
    });
}
// Asignar eventos a los botones
changeColorBtn.addEventListener('click', changeBoxColors);
changeTextBtn.addEventListener('click', changeBoxText);
