const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const taskCount = document.getElementById("taskCount");
const completedCount = document.getElementById("completedCount");
const clearCompleted = document.getElementById("clearCompleted");

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const text = taskInput.value.trim();
  if (text === "") {
    taskInput.focus();
    return;
  }

  addTask(text);
  taskInput.value = "";
  taskInput.focus();
});

function addTask(text) {
  const item = document.createElement("li");
  item.className = "task-item";

  const completeButton = document.createElement("button");
  completeButton.className = "complete-button";
  completeButton.type = "button";
  completeButton.setAttribute("aria-label", "Mark task complete");

  const taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";

  completeButton.addEventListener("click", function() {
    item.classList.toggle("completed");
    updateDisplay();
  });

  deleteButton.addEventListener("click", function() {
    item.remove();
    updateDisplay();
  });

  item.append(completeButton, taskText, deleteButton);
  taskList.appendChild(item);
  updateDisplay();
}

clearCompleted.addEventListener("click", function() {
  document.querySelectorAll(".task-item.completed").forEach(task => task.remove());
  updateDisplay();
});

function updateDisplay() {
  const allTasks = document.querySelectorAll(".task-item");
  const completedTasks = document.querySelectorAll(".task-item.completed");

  taskCount.textContent = allTasks.length;
  completedCount.textContent = `${completedTasks.length} completed`;
  emptyState.style.display = allTasks.length === 0 ? "block" : "none";
}

updateDisplay();
