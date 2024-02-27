// Function to handle task creation form submission
function addTask(event) {
  event.preventDefault();

  const taskName = document.getElementById('taskName').value;
  const priority = document.getElementById('priority').value;

  const task = {
      name: taskName,
      priority: priority
  };

  fetch('/api/tasks/addtask', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
  })
  .then(response => {
      if (response.ok) {
          // Clear the form
          document.getElementById('taskName').value = '';
          document.getElementById('priority').value = 'low';

          // Append task to the appropriate task list
          renderTask(task);
      } else {
          console.error('Failed to add task');
      }
  });
}

// Function to render a single task
function renderTask(task) {
  const taskList = document.getElementById(`${task.priority}PriorityList`);
  const taskItem = document.createElement('li');
  taskItem.textContent = task.name;
  taskList.appendChild(taskItem);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('task-form').addEventListener('submit', addTask);
});





  