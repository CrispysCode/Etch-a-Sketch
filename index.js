const container = document.querySelector(".container");

// grid creation function 

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
            const div = document.createElement("div");
            
            div.classList.add("gridItem");

            container.appendChild(div);
        
    }
}
createGrid(16);