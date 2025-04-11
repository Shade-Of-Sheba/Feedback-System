const express = require('express');
const mongoose = require('mongoose');
const app = express();
const feedbackRoutes = require('./routes/feedback');

app.use(express.json());
app.use('/api/feedback', feedbackRoutes);

mongoose.connect('mongodb://localhost:27017/your-db-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
})
.catch((err) => console.error(err));
