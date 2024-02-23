const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.static(path.join(__dirname, 'frontend', 'public')));
// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB 
const dbURI = 'mongodb://localhost:27017/myTaskManagerDatabase';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// importin routes
const userRoutes = require('./backend/routes/userRoutes');
const taskRoutes = require('./backend/routes/taskRoutes');
const categoryRoutes = require('./backend/routes/categoryRoutes');

// userroutes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/categories', categoryRoutes);

// server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

