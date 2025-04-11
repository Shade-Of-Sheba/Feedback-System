const express = require('express');
const Feedback = require('../models/Feedback');

const router = express.Router();

// Route to create new feedback
router.post('/', async (req, res) => {
  try {
    const { content, source } = req.body;
    const newFeedback = new Feedback({ content, source });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(500).json({ message: 'Error saving feedback', error: err });
  }
});

// Route to get today's feedback
router.get('/', async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const feedbacks = await Feedback.find({
      createdAt: { $gte: today },
    }).sort({ createdAt: -1 });

    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching feedback', error: err });
  }
});

module.exports = router;
