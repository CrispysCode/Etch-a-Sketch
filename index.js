const container = document.querySelector(".container");
createGrid(16);



  function createGrid(size) {
   
    for (let i = 0; i < size; i++) {;
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.className = "grid-div";
            div.addEventListener("mouseover", function() {
                div.classList.add("hover");
            });
            div.style.flex = "1 1 " + (100 / size) + "%";
            container.appendChild(div);
        }
    }
}
const newButton = document.querySelector("button");
newButton.addEventListener("click", function(){
    let newSize;
    let error = false;
    do {
        newSize = prompt("Enter the number of squares per side:");
        newSize = Number(newSize);
        if(!Number.isInteger(newSize) || newSize < 2 || newSize > 100) {
            alert("Please enter a number between 2 and 100.");
            error = true;
            continue;
        }

        error = false;
        document.querySelectorAll(".grid-div").forEach(el => el.remove());
        createGrid(newSize);
    } while(error)
});