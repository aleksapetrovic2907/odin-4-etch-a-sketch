const DEFAULT_GRID_SIZE = 16;

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    const grid = document.getElementById("grid");
    generateGrid(grid, DEFAULT_GRID_SIZE);
}

function generateGrid(grid, gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = generateRow();

        for (let j = 0; j < gridSize; j++) {
            row.appendChild(generateSquare());
        }

        grid.appendChild(row);
    }
}

function generateRow() {
    const row = document.createElement("div");
    row.classList.add("row");
    return row;
}

function generateSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    square.onmouseover = () => square.style.backgroundColor = getRandomColor();
    return square;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}