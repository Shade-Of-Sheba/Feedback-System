const mongoose = require('mongoose');

const SpaFeedbackSchema = new mongoose.Schema({
  bookingEase: { type: Number, required: true },
  cleanlinessAmbience: { type: Number, required: true },
  therapistSkill: { type: Number, required: true },
  relaxationRating: { type: Number, required: true },
  allFacilitiesWorking: { type: Boolean, required: true },
  facilityIssues: { type: String },
  staffHospitality: { type: Number, required: true },
  valueForMoney: { type: Number, required: true },
  wouldRecommend: { type: Boolean, required: true },
  recommendReason: { type: String },
  improvementSuggestion: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('SpaFeedback', SpaFeedbackSchema);
