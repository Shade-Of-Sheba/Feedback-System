import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  content: String,
  source: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Feedback', feedbackSchema);
