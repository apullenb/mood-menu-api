require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { NODE_ENV } = require('./config');
const helmet = require('helmet');
const app = express();
const userRouter = require('./Routes/users/userRoutes');
const moodRouter = require('./Routes/moods/moodRoutes');

// MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(cors());

// ROUTES
app.use('/api/users', userRouter);
app.use('/api/moods', moodRouter);



app.get('/', (req, res) => {
  res.send('Hello, world!');
});






module.exports = app;