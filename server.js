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

// Importing models

const Task = require('./backend/models/Task'); // Import the Task model

// Importing routes
const taskRoutes = require('./backend/routes/taskRoutes');

// Use routes
app.use('/api/task', taskRoutes); // Use the taskRoutes for '/api/tasks' endpoint

// Serve static files
app.use(express.static(path.join(__dirname, 'frontend')));

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


