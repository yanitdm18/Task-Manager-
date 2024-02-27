// script.js

const taskForm = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskName');
const prioritySelect = document.getElementById('priority');
const taskList = document.getElementById('taskList');

// Function to fetch tasks from the API and render them
async function fetchTasks() {
    taskList.innerHTML = ''; // Clear the existing task list
    const response = await fetch('/api/tasks');
    const tasks = await response.json();
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.name} - Priority: ${task.priority}`;
        taskList.appendChild(li);
    });
}

// Function to add a new task
async function addTask(event) {
    event.preventDefault();
    const task = {
        name: taskNameInput.value,
        priority: prioritySelect.value
    };
    const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    if (response.ok) {
        fetchTasks(); // Refresh the task list
        taskNameInput.value = ''; // Clear the task name input
    } else {
        console.error('Failed to add task');
    }
}

taskForm.addEventListener('submit', addTask);
fetchTasks(); // Fetch tasks when the page loads

