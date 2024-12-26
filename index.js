const container = document.querySelector(".container");

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


createGrid(16);


console.log(gridItem);