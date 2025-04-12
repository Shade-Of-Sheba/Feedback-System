require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const feedbackRoutes = require('./routes/feedback');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error(' Error: MONGO_URI is missing in environment variables.');
  process.exit(1);
}

app.use(express.json());
app.use('/api/feedback', feedbackRoutes);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
