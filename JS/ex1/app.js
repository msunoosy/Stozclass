// Define a UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#search");

// Load all event listerners

function loadEventListerners() {
  // Add task event
  form.addEventListener("submit", addTask);

  // Clear task lists
  clearBtn.addEventListener("click", clearTask);

  taskList.addEventListener("click", removeTask);

  filter.addEventListener("keyup", search);
}

loadEventListerners();

// let tasksArr = Array.from(document.querySelectorAll(".collection-item"))
// .map(task => task.innerText);
// localStorage.setItem("tasksArr", JSON.stringify(tasksArr));

function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    alert("Please fill the form");
  } else {
    // Get the input value

    // Retrieve existing array from localStorage, or start with empty array
    let listArr = JSON.parse(localStorage.getItem("listArr")) || [];

    // Add new value to the array
    listArr.push(taskInput.value);
    // Save updated array back to localStorage
    localStorage.setItem("listArr", JSON.stringify(listArr));

    // // Create element
    // const li = document.createElement("li");

    // // Add class
    // li.className = "collection-item";

    // // Add a inner text

    // const value= taskInput.value.trim()
    // let item=JSON.parse(localStorage.getItem("myArray")) || [];
    // item.push(value)
    // console.log(value)
    //   li.innerText = taskInput.value;

    // // Create a new link element
    // const link = document.createElement("a");

    // // Add class to link
    // link.className = "delete-item secondary-content";

    // // Add a icon into link
    // link.innerHTML = `<i class="fa fa-remove"></i>`;

    // // Add a link to li
    // li.appendChild(link);

    // // Add a li to ul
    // taskList.appendChild(li);
  }
}

function clearTask() {
  // taskList.innerHTML = "";

  const listItems = Array.from(taskList.children);

  console.log(listItems);

  listItems.forEach(function (li, index, arr) {
    li.remove();
  });
}

function removeTask(e) {
  e.target.parentElement.parentElement.remove();
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
