const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");

let boxes = [];

// 🎲 Random color
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}

// 🧱 Create color box
function createBox(color) {
  const div = document.createElement("div");
  div.classList.add("color");
  div.style.backgroundColor = color;

  const text = document.createElement("p");
  text.textContent = color;

  const lockBtn = document.createElement("button");
  lockBtn.textContent = "🔓";

  let locked = false;

  // 📋 Copy color
  div.addEventListener("click", () => {
    navigator.clipboard.writeText(text.textContent);
    alert("Copied: " + text.textContent);
  });

  // 🔒 Lock toggle
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
    },
    getColor: () => text.textContent
  };
}

// 🎨 Generate palette
function generatePalette() {
  if (boxes.length === 0) {
    for (let i = 0; i < 5; i++) {
      const box = createBox(randomColor());
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

// 💾 Save palette
function savePalette() {
  const colors = boxes.map(box => box.getColor());
  localStorage.setItem("palette", JSON.stringify(colors));
  alert("Palette saved!");
}

// 📂 Load palette
function loadPalette() {
  const saved = JSON.parse(localStorage.getItem("palette"));
  if (!saved) return;

  palette.innerHTML = "";
  boxes = [];

  saved.forEach(color => {
    const box = createBox(color);
    boxes.push(box);
    palette.appendChild(box.element);
  });
}

// 🎯 Events
generateBtn.addEventListener("click", generatePalette);
saveBtn.addEventListener("click", savePalette);
loadBtn.addEventListener("click", loadPalette);