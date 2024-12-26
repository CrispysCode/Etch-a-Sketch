const container = document.querySelector(".container");
const gridBtn = document.querySelector(".newGrid");
// grid creation function 
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(size) {
    clearGrid();
    const itemSize = 100 / size;

    for (let i = 0; i < size * size; i++) {
            const div = document.createElement("div");
            
            div.classList.add("gridItem");

            container.appendChild(div);  
    }

const gridItems = document.querySelectorAll(".gridItem");

   gridItems.forEach((div) => {
        div.addEventListener("mouseover", () => {
       div.style.backgroundColor = getRandomColor();
    })
})
}
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function makeGrid() {
  const userInput = parseInt(prompt("Enter a number to create a grid"), 10);
  createGrid(userInput);
}
gridBtn.addEventListener("click", () => {
    makeGrid()
})

createGrid(16);


console.log(gridItem);