import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import feedbackRoutes from './routes/feedbackRoutes.js';
import summaryRoutes from './routes/summaryRoutes.js';
import './services/scheduler.js'; // load cron job

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
