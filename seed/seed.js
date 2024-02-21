const db = require('../db');
const { User, Task, Category } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  try {
    // categories
    const categories = await Category.insertMany([
      { name: 'Work', priority: 'High' },
      { name: 'Personal', priority: 'Medium' },
      { name: 'Shopping', priority: 'Low' }
      // Add more categories as needed
    ]);
    console.log('Seeded categories:', categories);

    // users
    const users = await User.insertMany([
      { username: 'user1', email: 'user1@example.com', password: 'password1' },
      { username: 'user2', email: 'user2@example.com', password: 'password2' },
      // Add more users as needed
    ]);
    console.log('Seeded users:', users);

    //  tasks
    const tasks = await Task.insertMany([
      {
        name: 'Complete project proposal',
        description: 'Write and submit project proposal for review',
        completed: false,
        category: categories.find(category => category.name === 'Work')._id,
        user: users[0]._id
      },
      // Add more tasks as needed
    ]);
    console.log('Seeded tasks:', tasks);
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

const run = async () => {
  await main();
  db.close();
};

run();

