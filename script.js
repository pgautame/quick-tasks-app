document
  .getElementById("taskForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;

    const task = {
      title,
      description,
      dueDate,
    };

    addTaskToList(task);
    clearForm();
  });

let tasks = [];

function addTaskToList(task) {
  tasks.push(task);
  displayTasks();
}

function displayTasks() {
  const tasksContainer = document.getElementById("tasksContainer");
  tasksContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.className = "task";

    taskElement.innerHTML = `
            <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Due: ${task.dueDate}</p>
            </div>
            <div class="actions">
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

    tasksContainer.appendChild(taskElement);
  });
}

function clearForm() {
  document.getElementById("taskForm").reset();
}

function editTask(index) {
  const task = tasks[index];

  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("dueDate").value = task.dueDate;

  tasks.splice(index, 1);
  displayTasks();
}

function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    displayTasks();
  }
}
