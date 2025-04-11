const mongoose = require('mongoose');

const ReservationFeedbackSchema = new mongoose.Schema({
  bookingEase: { type: Number, required: true },
  roomMatched: { type: Boolean, required: true },
  roomMismatchReason: { type: String },
  roomCleanliness: { type: Number, required: true },
  comfortLevel: { type: Number, required: true },
  everythingWorking: { type: Boolean, required: true },
  issueIfNot: { type: String },
  checkinCheckout: { type: Number, required: true },
  staffFriendliness: { type: Number, required: true },
  wouldRecommend: { type: Boolean, required: true },
  recommendReason: { type: String },
  improvementSuggestion: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('ReservationFeedback', ReservationFeedbackSchema);
