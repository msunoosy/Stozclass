const palette = document.getElementById("palette");
const button = document.getElementById("generateBtn");

let boxes = [];

// Generate random HEX color
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}