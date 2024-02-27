
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import your User model
const userController = require('../controllers/userController'); // Import the user controller

// Route for user login
router.post('/api/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate password
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Redirect the user to the dashboard upon successful login
    res.redirect('/dashboard.html');
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Login failed' });
  }
});

// Route for user signup
router.post('api/users/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = await User.create({ username, email, password });
    await newUser.save();
    // Redirect the user to the dashboard upon successful signup
    res.redirect('/dashboard.html');
  } catch (error) {
    console.error('Signup error:', error.message);
    res.status(500).json({ message: 'Signup failed' });
  }
});

// Define routes using controller functions for CRUD operations
router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:id', userController.getUserById);
router.post('/api/users/signup', userController.createUser);
router.put('/api/users/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;

