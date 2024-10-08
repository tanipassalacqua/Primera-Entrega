const changeColorBtn = document.getElementById('change-color-btn') as HTMLButtonElement;
const changeTextBtn = document.getElementById('change-text-btn') as HTMLButtonElement;
const boxes = document.querySelectorAll('.box') as NodeListOf<HTMLDivElement>;

function changeBoxColors(): void {
  boxes.forEach(box => {
    if (box.style.backgroundColor === 'lightgray') {
      box.style.backgroundColor = 'lightblue';
    } else {
      box.style.backgroundColor = 'lightgray';
    }
  });
}

function changeBoxText(): void {
  boxes.forEach((box, index) => {
    box.textContent = `Nuevo Texto ${index + 1}`;
  });
}

changeColorBtn.addEventListener('click', changeBoxColors);
changeTextBtn.addEventListener('click', changeBoxText);
