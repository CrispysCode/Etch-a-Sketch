const container = document.querySelector(".container");

// grid creation function 

function createGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const div = document.createElement("div");
            
            div.classList.add("gridItem");
            
            container.appendChild(div);
        }
    }
}
createGrid(16, 16);