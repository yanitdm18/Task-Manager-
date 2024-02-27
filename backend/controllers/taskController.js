// backend/controllers/taskController.js


// Dummy data to simulate tasks
let tasks = [
  { id: 1, title: 'Task 1', priority: 'high', completed: false },
  { id: 2, title: 'Task 2', priority: 'medium', completed: false },
  { id: 3, title: 'Task 3', priority: 'low', completed: true }
];

// Get all tasks
const getAllTasks = (req, res) => {
  res.json(tasks);
};

// Get task by ID
const getTaskById = (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(task => task.id === taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

// Create a new task
const createTask = (req, res) => {
  const { title, priority } = req.body;
  const newTask = { id: tasks.length + 1, title, priority, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Update task by ID
const updateTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, priority, completed } = req.body;
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = { id: taskId, title, priority, completed };
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

// Delete task by ID
const deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
