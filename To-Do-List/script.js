// Function to add a new task
function addTask() {
  // Get the task input value
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim(); 

  
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item (li)
  const li = document.createElement("li");
  li.textContent = taskText; // Set the text of the task

  const completeButton = document.createElement("button");
  completeButton.textContent = "✔";
  completeButton.onclick = function () {
    li.classList.toggle("completed"); // Toggle 'completed' class to cross out the task
  };

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete"; 
  deleteButton.onclick = function () {
    li.remove(); // Remove the task from the list
  };

  const editButton = document.createElement("button");
  editButton.textContent = "Edit"; 
  editButton.onclick = function () {
    
    const newTaskText = prompt("Edit your task:", li.firstChild.textContent);

    // If the user entered a new task and it's not empty, update the task text
    if (newTaskText !== null && newTaskText.trim() !== "") {
      li.firstChild.textContent = newTaskText.trim();
    }
  };

  // Append the buttons to the list item (li)
  li.appendChild(completeButton);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  // Add the list item to the task list (ul)
  const taskList = document.getElementById("taskList");
  taskList.appendChild(li);

  // Clear the input field after adding the task
  taskInput.value = "";
}
