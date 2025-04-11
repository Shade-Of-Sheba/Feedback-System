const express = require('express');
const router = express.Router();

const ReservationFeedback = require('../models/ReservationFeedback');
const SpaFeedback = require('../models/SpaFeedback');
const FoodFeedback = require('../models/FoodFeedback');
const WaterParkFeedback = require('../models/WaterParkFeedback');

// POST Reservation Feedback
router.post('/reservation', async (req, res) => {
  try {
    const feedback = new ReservationFeedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Reservation feedback submitted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST Spa Feedback
router.post('/spa', async (req, res) => {
  try {
    const feedback = new SpaFeedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Spa feedback submitted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST Food Feedback
router.post('/food', async (req, res) => {
  try {
    const feedback = new FoodFeedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Food feedback submitted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST Water Park Feedback
router.post('/waterpark', async (req, res) => {
  try {
    const feedback = new WaterParkFeedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Water park feedback submitted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
