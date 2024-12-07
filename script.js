// Initialize variables
let grid = 16;
let container = document.getElementById("grid-container");
const btn = document.querySelector(".btn");
let userInput = document.querySelector(".input");

// Function to create the grid
function createGrid(gridSize) {
    // Clear the existing grid
    container.innerHTML = "";

    // Apply CSS grid styles
    container.style.display = "grid";
    container.style.gridTemplateRows = `repeat(${gridSize}, 16px)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 16px)`;

    // Create grid cells
    for (let i = 0; i < gridSize * gridSize; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cellGrid");
        cell.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "red";
        });
        container.appendChild(cell);
    }
}

// Initial grid creation
if (!isNaN(grid) && grid > 0) {
    createGrid(grid);
} else {
    alert("Invalid grid size. Please reload and enter a valid number.");
}

// Handle grid size change on button click
btn.addEventListener("click", function () {
    const newGridSize = parseInt(userInput.value);
    if (!isNaN(newGridSize) && newGridSize > 0) {
        grid = newGridSize;
        createGrid(grid);
        userInput.value = ""; // Clear input field
    } else {
        alert("Please enter a valid grid size.");
    }
});
