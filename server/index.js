const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const feedbackRoutes = require('./routes/feedbackRoutes');
const summaryRoutes = require('./routes/summaryRoutes');
require('./services/scheduler'); // load cron job

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/feedback', feedbackRoutes);
app.use('/api/summaries', summaryRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server running...');
    });
  })
  .catch((err) => console.log(err));
