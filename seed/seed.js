//modules
const mongoose = require('mongoose');
const User = require('./User'); // Assuming User.js is in the same directory as seed.js
const Task = require('./Task');
const Category = require('./Category');


// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/myTaskManagerDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const users = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' }
];

const tasks = [
  { title: 'Task 1', description: 'Description for Task 1', priority: 'high', completed: false, userId: '<userId>' },
  { title: 'Task 2', description: 'Description for Task 2', priority: 'medium', completed: false, userId: '<userId>' },
 
];

const categories = [
    
        { name: 'Work', description: 'Tasks related to work responsibilities.' },
        { name: 'School', description: 'Tasks related to academic studies or projects.' },
        { name: 'Chores', description: 'Tasks related to household chores or errands.' },
       
      ];
      
User.insertMany(users)
  .then((userDocs) => {
    console.log('Users seeded successfully:', userDocs);
    
 
    const tasksWithUserIds = tasks.map(task => ({ ...task, userId: userDocs[0]._id }));
    return Task.insertMany(tasksWithUserIds);
  })
  .then((taskDocs) => {
    console.log('Tasks seeded successfully:', taskDocs);
    
    
    return Category.insertMany(categories);
  })
  .then((categoryDocs) => {
    console.log('Categories seeded successfully:', categoryDocs);
    
    mongoose.connection.close(); 
  })
  .catch((err) => {
    console.error('Error seeding data:', err);
    mongoose.connection.close(); 
  });
