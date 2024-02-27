const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB 
const dbURI = 'mongodb://localhost:27017/myTaskManagerDatabase';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// importin routes

const taskRoutes = require('./backend/routes/taskRoutes');


// taskrroutes

app.use('/api/task', taskRoutes);

app.get('/dashboard', (req, res) => {
  // Assuming you have a dashboard HTML file in your frontend/public directory
  res.sendFile(path.join(__dirname, 'frontend', 'public', 'dashboard.html'));
});
app.post('/api/tasks', async (req, res) => {
  try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).json(task);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

app.get('/api/tasks', async (req, res) => {
  try {
      const tasks = await Task.find();
      res.json(tasks);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.put('/api/tasks/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.json(task);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const task = await Task.findByIdAndDelete(id);
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.json({ message: 'Task deleted successfully' });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

// server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

