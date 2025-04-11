const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const summarizeFeedback = async (messages) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Summarize this customer feedback clearly and concisely.' },
      { role: 'user', content: messages.join('\n') }
    ]
  });
  return response.choices[0].message.content;
};

module.exports = { summarizeFeedback };
