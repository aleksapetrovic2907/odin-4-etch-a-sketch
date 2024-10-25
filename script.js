const DEFAULT_GRID_SIZE = 16;
const MAX_GRID_SIZE = 100;
let grid;

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    grid = document.getElementById("grid");
    generateGrid(DEFAULT_GRID_SIZE);
}

function generateGrid(gridSize) {
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

function changeGridSize() {
    const newSize = prompt(`What size would you like (max ${MAX_GRID_SIZE})?`);

    if (newSize < 0 || newSize > MAX_GRID_SIZE) {
        alert("Grid size is not acceptable.");
        return;
    }

    generateGrid(newSize);
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