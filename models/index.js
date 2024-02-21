const mongoose = require('mongoose');
const userSchema = require('./user');
const taskSchema = require('./task');
const categorySchema = require('./category');

const User = mongoose.model('User', userSchema);
const Task = mongoose.model('Task', taskSchema);
const Category = mongoose.model('Category', categorySchema);

module.exports = {
  User,
  Task,
  Category
};
