const palette = document.getElementById("palette");
const button = document.getElementById("generateBtn");

let boxes = [];

// Generate random HEX color
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}

// Create a color box
function createColorBox(color) {
  const div = document.createElement("div");
  div.classList.add("color");
  div.style.backgroundColor = color;

  const text = document.createElement("p");
  text.textContent = color;

  const lockBtn = document.createElement("button");
  lockBtn.textContent = "🔓";

  let locked = false;

  // Copy color
  div.addEventListener("click", () => {
    navigator.clipboard.writeText(text.textContent);
    alert(`Copied ${text.textContent}`);
  });

  // Lock toggle
  lockBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    locked = !locked;

    div.classList.toggle("locked");
    lockBtn.textContent = locked ? "🔒" : "🔓";
  });

  div.appendChild(text);
  div.appendChild(lockBtn);

  return {
    element: div,
    isLocked: () => locked,
    setColor: (newColor) => {
      div.style.backgroundColor = newColor;
      text.textContent = newColor;
    }
  };
}

// Generate palette
function generatePalette() {
  if (boxes.length === 0) {
    for (let i = 0; i < 5; i++) {
      const box = createColorBox(randomColor());
      boxes.push(box);
      palette.appendChild(box.element);
    }
  } else {
    boxes.forEach(box => {
      if (!box.isLocked()) {
        box.setColor(randomColor());
      }
    });
  }
}

// Button click
button.addEventListener("click", generatePalette);