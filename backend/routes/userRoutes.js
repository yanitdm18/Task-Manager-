// backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../../seed/User');
// Route for user login
router.post('/login', async (req, res) => {
    // Check user credentials and perform authentication
    // For demonstration purposes, let's assume authentication is successful
    const loggedInUser = { username: 'exampleUser' };
  // Redirect the user to the dashboard
  res.redirect('/dashboard.html');
});

// Route for user signup
router.post('/signup', async (req, res) => {
  // Create a new user based on signup form data
  // For demonstration purposes, let's assume user creation is successful
  const newUser = await User.create(req.body);

  // Redirect the user to the dashboard
  res.redirect('/dashboard.html');
});
// Import the user controller
const userController = require('../controllers/userController');

// Define routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
