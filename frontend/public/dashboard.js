document.addEventListener('DOMContentLoaded', function() {
    // tasks data
    const tasks = [
      { name: 'Task 1', priority: 'High', completed: false },
      { name: 'Task 2', priority: 'Medium', completed: false },
      { name: 'Task 3', priority: 'Low', completed: true }
    ];
  
    //render tasks
    function renderTasks() {
      const tasksContainer = document.getElementById('tasks-container');
      tasksContainer.innerHTML = '';
  
      tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.innerHTML = `
          <div>
            <span>Name: ${task.name}</span>
            <span>Priority: ${task.priority}</span>
            <span>Status: ${task.completed ? 'Completed' : 'Pending'}</span>
          </div>
        `;
        if (task.completed) {
            const achievementStatus = document.createElement('span');
            achievementStatus.textContent = '🏆 Achievement Unlocked: Task Completed!';
            achievementStatus.style.color = 'hot pink';
            taskElement.appendChild(achievementStatus);
        }
        tasksContainer.appendChild(taskElement);
      });
    }
  
    // Render initial tasks
    renderTasks();
  
    //  add new task
    function addTask(task) {
      tasks.push(task);
      renderTasks();
    }
  
    //  adding a new task
    const newTask = { name: 'New Task', priority: 'High', completed: false };
    addTask(newTask);
  });
  