const Task = require('../models/Task');
const createTask = (req, res) => {
const { title, priority } = req.body;

// Check if a task with the same title already exists
  Task.findOne({ title: title })
    .then(existingTask => {
      if (existingTask) {
        return res.status(400).json({ message: ' This task exists' });
      }

       // Create a new task object with default values if title and priority are not provided
       const newTask = new Task({
        title: taskName|| 'Add Task', // Use a default title if not provided
        priority: priority || 'Low', // Use a default priority if not provided
        completed: false
      });


      // Save the new task to the database
      newTask.save()
        .then(task => {
          // Send the new task as the response
          res.status(201).json(task);
        })
        .catch(error => {
          res.status(400).json({ message: error.message });
        });
    })
    .catch(error => {
      res.status(400).json({ message: error.message });
    });
};

// Get all tasks
const getAllTasks = (req, res) => {
  Task.find()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

// Get task by ID
const getTaskById = (req, res) => {
  const taskId = req.params.id;
  Task.findById(taskId)
    .then(task => {
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
}



// Update task by ID
const updateTask = (req, res) => {
  const taskId = req.params.id;
  const { title, priority, completed } = req.body;
  Task.findByIdAndUpdate(taskId, { title, priority, completed }, { new: true })
    .then(updatedTask => {
      if (updatedTask) {
        res.json(updatedTask);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

// Delete task by ID
const deleteTask = (req, res) => {
  const taskId = req.params.id;
  Task.findByIdAndDelete(taskId)
    .then(deletedTask => {
      if (deletedTask) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
