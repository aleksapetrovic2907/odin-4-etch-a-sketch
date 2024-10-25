const DEFAULT_GRID_SIZE = 16;

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    const grid = document.getElementById("grid");
    generateGrid(grid, DEFAULT_GRID_SIZE);
}

function generateGrid(grid, gridSize) {
    for (let i = 0; i < gridSize; i++) {
        grid.appendChild(generateSquare());
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
    return square;
}