const mongoose = require('mongoose');
const summarySchema = new mongoose.Schema({
  source: String,
  summary: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Summary', summarySchema);
