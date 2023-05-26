// TIME
function displayTime() {
  let currentDate = new Date();

  let month = currentDate.getMonth();
  let today = currentDate.getDate();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let secondes = currentDate.getSeconds();
  let weekDay = currentDate.getDay();

  let amORpm = "AM";

  if (hours >= 12) {
    amORpm = "PM";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (secondes < 10) {
    secondes = "0" + secondes;
  }

  let monthes = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + secondes + " " + amORpm;
  document.getElementById("date").innerHTML = `${monthes[month]}  ${today}`;
  document.getElementsByClassName(
    "forecast-day"
  ).innerHTML = `${days[weekDay]}`;
}
setInterval(displayTime, 1000);

// FORECAST

//SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector("#filter-todo");
const todoDiv = document.getElementsByClassName("todo");
const todos = [];

const newListForm = document.getElementById("newListForm");
const newListInput = document.getElementById("newListInput");
const todoSelect = document.getElementById("todo-select");

// new slection optopn
newListForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newListName = newListInput.value;
  todoSelect.innerHTML += `
  {<option value="${newListName}">${newListName}</option>
  `;

  const newList = document.createElement("div");
  newList.classList.add("list");
  newList.innerHTML = `
    <h2>${newListName}</h2>
    <ul class="todo-list" id="${newListName}"></ul>
    <input type="text" placeholder="enter new todo">
    <button class="add-task-button">add new todo</button>
  `;
});
// todos.push(todoList.childNodes);
//Event Listener

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);


// FUNCTION
function addTodo(event) {
  event.preventDefault();

  const todoValue = todoInput.value;

  // check if the todo is empty
  const isEmpty = todoValue === "";
  let isDuplicate = todos.some(
    (todo) => todo.innerText.toUpperCase() === todoValue.toUpperCase()
  );
  if (isEmpty) {
    alert("Todo's input is empty");
  } else if (isDuplicate) {
    alert("Todo is already exist");
  } else {
    // const todoDiv = document.createElement("div");
    // todoDiv.classList.add("todo");

    const todoUl = document.querySelector(".todo-list");

    const newTodo = document.createElement("li");
    newTodo.textContent += todoInput.value;
    newTodo.classList.add("todo-item");

    todoUl.appendChild(newTodo)
    //appendChild(newTodo);
    // const todoContainer = document.getElementsByClassName("todo-container");
    // todoContainer.todos.push(todoValue);

    todoInput.value = "";
    
    // Check button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class = "fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  newTodo.appendChild(completedButton);
  // TRASH button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  newTodo.appendChild(trashButton);
  // todoList.appendChild(newTodo);

  let newArray = [];
  newArray += newTodo;
  function filterTodo(ev) {
    for(const el of newArray) {
      switch (ev.target.value) {
        case "all":
          newTodo.style.display = "flex";
          break;
        case "completed":
          if (!newTodo.classList.contains("completed")) {
            newTodo.style.display = "flex";
          } else {
            newTodo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (newTodo.classList.contains("completed")) {
            newTodo.style.display = "flex";
          } else {
            newTodo.style.display = "none";
          }
          break;
      }
    };
  }
  
  filterOption.addEventListener("click", filterTodo);
}

  // clear input value

  todoInput.value = "";
}

//delete
function deleteCheck(event) {
  const item = event.target;

  //delete todo

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  //check mark

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}



function saveLocalTodos(todo) {}
