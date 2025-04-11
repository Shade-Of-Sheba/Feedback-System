import express from 'express';
import Summary from '../models/Summary.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const summaries = await Summary.find().sort({ date: -1 });
  res.json(summaries);
});

export default router;
