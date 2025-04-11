const mongoose = require('mongoose');

const WaterParkFeedbackSchema = new mongoose.Schema({
  visitRating: { type: Number, required: true },
  cleanlinessRating: { type: Number, required: true },
  safetyConfirmed: { type: Boolean, required: true },
  safetyConcern: { type: String },
  staffRating: { type: Number, required: true },
  waitTimeRating: { type: Number, required: true },
  changingRoomClean: { type: Boolean, required: true },
  foodRating: { type: Number, required: true },
  wouldRecommend: { type: Boolean, required: true },
  recommendReason: { type: String },
  improvementSuggestion: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('WaterParkFeedback', WaterParkFeedbackSchema);
