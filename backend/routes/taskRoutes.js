// backend/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Define routes using controller functions
router.get('/api/tasks', taskController.getAllTasks);
router.get('/api/tasks/:id', taskController.getTaskById);
router.post('/api/tasks/addtask', taskController.createTask);
router.put('/api/tasks/:id', taskController.updateTask);
router.delete('/api/tasks/:id', taskController.deleteTask);

module.exports = router;
