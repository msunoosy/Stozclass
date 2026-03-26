// Define a UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#search");

// Load all event listerners
document.addEventListener("DOMContentLoaded", loadTasks);

function loadEventListerners() {
  // Add task event
  form.addEventListener("submit", addTask);

  // Clear task lists
  clearBtn.addEventListener("click", clearTask);

  taskList.addEventListener("click", removeTask);

  filter.addEventListener("keyup", search);
}

loadEventListerners();


function loadTasks() {
  // Get array from localStorage
  const listArr = JSON.parse(localStorage.getItem('listArr')) || [];

  // Loop through each item
  listArr.forEach(function(task) {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.innerText = task;

    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    li.appendChild(link);
    taskList.appendChild(li);
  });
}


function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    alert("Please fill the form");
  } else {
   
    let listArr = JSON.parse(localStorage.getItem("listArr")) || [];
    listArr.push(taskInput.value.trim());
    localStorage.setItem("listArr", JSON.stringify(listArr));
    // Create element
    const li = document.createElement("li");
    // Add class
    li.className = "collection-item";
    // Add a inner text
      li.innerText = taskInput.value;
    // Create a new link element
    const link = document.createElement("a");
    // Add class to link
    link.className = "delete-item secondary-content";
    // Add a icon into link
    link.innerHTML = `<i class="fa fa-remove"></i>`;
    // Add a link to li
    li.appendChild(link);
    // Add a li to ul
    taskList.appendChild(li);
    taskInput.value=""
  }
}

function clearTask() {
  // taskList.innerHTML = "";

  const listItems = Array.from(taskList.children);
  listItems.forEach(function (li, index, arr) {
    li.remove();
  });
 let listArr = JSON.parse(localStorage.getItem('listArr')) || [];
 listArr=[];
 localStorage.setItem('listArr', JSON.stringify(listArr));

}

function removeTask(e) {
 const li= e.target.parentElement.parentElement;
      let listArr = JSON.parse(localStorage.getItem('listArr')) || [];

    const taskText = li.firstChild.textContent.trim();

    listArr = listArr.filter(task => task !== taskText);

    localStorage.setItem('listArr', JSON.stringify(listArr));

    li.remove();
}

function search(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.innerText;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
