const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const feedbackRoutes = require('./routes/feedbackRoutes');
const summaryRoutes = require('./routes/summaryRoutes');
require('./services/scheduler'); // load cron job

// Load environment variables from .env file
dotenv.config();

// Debugging: Log the environment variables to check if they are loaded correctly
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);
if (process.env.OPENAI_API_KEY) {
  console.log('OpenAI API Key is loaded');
} else {
  console.log('Error: OPENAI_API_KEY is missing or empty');
}

const app = express();
app.use(express.json());

app.use('/api/feedback', feedbackRoutes);
app.use('/api/summaries', summaryRoutes);

// Ensure that MONGO_URI is available
if (!process.env.MONGO_URI) {
  console.error('Error: MONGO_URI is missing in environment variables.');
  process.exit(1); // Exit the app if MONGO_URI is not defined
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server running...');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); 
  });
