const ReservationFeedback = require('../models/ReservationFeedback');
const SpaFeedback = require('../models/SpaFeedback');
const FoodFeedback = require('../models/FoodFeedback');
const WaterParkFeedback = require('../models/WaterParkFeedback');


exports.submitReservationFeedback = async (req, res) => {
  try {
    const feedback = new ReservationFeedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Reservation feedback submitted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReservationFeedback = async (req, res) => {
  try {
    const feedbacks = await ReservationFeedback.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.submitSpaFeedback = async (req, res) => {
  try {
    const feedback = new SpaFeedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Spa feedback submitted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSpaFeedback = async (req, res) => {
  try {
    const feedbacks = await SpaFeedback.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.submitFoodFeedback = async (req, res) => {
  try {
    const feedback = new FoodFeedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Food feedback submitted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFoodFeedback = async (req, res) => {
  try {
    const feedbacks = await FoodFeedback.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.submitWaterParkFeedback = async (req, res) => {
  try {
    const feedback = new WaterParkFeedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Water park feedback submitted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWaterParkFeedback = async (req, res) => {
  try {
    const feedbacks = await WaterParkFeedback.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
