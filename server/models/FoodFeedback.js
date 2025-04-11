const mongoose = require('mongoose');

const FoodFeedbackSchema = new mongoose.Schema({
  foodQuality: { type: Number, required: true },
  correctTemperature: { type: Boolean, required: true },
  temperatureIssue: { type: String },
  foodVariety: { type: Number, required: true },
  diningCleanliness: { type: Number, required: true },
  serviceSpeed: { type: Number, required: true },
  staffFriendliness: { type: Number, required: true },
  priceValue: { type: Number, required: true },
  wouldRecommend: { type: Boolean, required: true },
  recommendReason: { type: String },
  improvementSuggestion: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('FoodFeedback', FoodFeedbackSchema);
