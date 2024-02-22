const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/taskManagerDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())
app.use(express.json())

app.get('/test', (req, res) => {
    res.send('This is a test route!');
  });
  
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})




  