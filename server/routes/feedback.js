const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Reservation
router.post('/reservation', feedbackController.submitReservationFeedback);
router.get('/reservation', feedbackController.getReservationFeedback);

// Spa
router.post('/spa', feedbackController.submitSpaFeedback);
router.get('/spa', feedbackController.getSpaFeedback);

// Food
router.post('/food', feedbackController.submitFoodFeedback);
router.get('/food', feedbackController.getFoodFeedback);

// Water Park
router.post('/waterpark', feedbackController.submitWaterParkFeedback);
router.get('/waterpark', feedbackController.getWaterParkFeedback);

module.exports = router;
