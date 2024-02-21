const db = require('../db');
const { User, Task, Category } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  try {
    console.log('Seeding database...');
    //  categories
    const categories = await Category.insertMany([
      { name: 'Work', priority: 'High' },
      { name: 'Personal', priority: 'Medium' },
      { name: 'Shopping', priority: 'Low' }
      
    ]);
    console.log('Seeded categories:', categories);

    //  users
    const users = await User.insertMany([
      { username: 'user1', email: 'user1@example.com', password: 'password1' },
      { username: 'user2', email: 'user2@example.com', password: 'password2' },
      
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
      
    ]);
    console.log('Seeded tasks:', tasks);

    console.log('Database seeding completed.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
   
    db.close();
  }
};

main();


