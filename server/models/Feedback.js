const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  content: String,
  source: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
