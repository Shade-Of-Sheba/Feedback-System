const cron = require('node-cron');
const { summarizeFeedback } = require('./aiSummarizer.js');
const Feedback = require('../models/Feedback.js');
const Summary = require('../models/Summary.js');

cron.schedule('0 23 * * *', async () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const feedbacks = await Feedback.find({ createdAt: { $gte: start, $lte: end } });
  const grouped = feedbacks.reduce((acc, item) => {
    acc[item.source] = acc[item.source] || [];
    acc[item.source].push(item.content);
    return acc;
  }, {});

  for (const [source, messages] of Object.entries(grouped)) {
    const summary = await summarizeFeedback(messages);
    await Summary.create({ source, summary, date: new Date() });
  }
});
