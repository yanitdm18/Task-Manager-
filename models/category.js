const { Schema } = require('mongoose');

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      required: true
    }
  }
);

module.exports = categorySchema;

