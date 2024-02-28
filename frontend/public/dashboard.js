document.addEventListener('DOMContentLoaded', function() {
  const taskForm = document.getElementById('task-form');
  const todoContainer = document.querySelector('.todoContainer');

  // Event listener for form submission
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get task details from the form fields
    const taskName = document.getElementById('taskName').value;
    const priority = document.getElementById('priority').value;

    // Create a new task object with the task details
    const newTask = {
      title: taskName,
      priority: priority
    };

    // Make a POST request to the create task endpoint
    fetch('http://localhost:8000/api/task/addtask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create task');
      }
      return response.json();
    })
    .then(task => {
      
    
  
      // Create a new list item for the task
      const taskItem = document.createElement('li');
      taskItem.textContent = `${task.title} - Priority: ${task.priority}`;
    
     
      todoContainer.appendChild(taskItem);
    })
    .catch(error => {
      
      console.error('Error:', error);
    });
    
  }) ;
})

const updateButton = document.createElement('button');
updateButton.textContent = 'Update';
updateButton.addEventListener('click', function() {
// Update a task
const updateTask = async (id, updatedTaskData) => {
  try {
    const response = await fetch(`http://localhost:8000/api/task/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTaskData),
    });
    const updatedTask = await response.json();
    return updatedTask;
  } catch (error) {
    console.error('Error updating task:', error);
  }
};
})
taskItem.appendChild(updateButton);
// Delete a task
const deleteTask = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/task/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

