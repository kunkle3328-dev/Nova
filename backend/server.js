/*
 * Backend server for NovaCode scaffold.
 * This Express server accepts chat messages and returns a stubbed response.
 * In a real implementation, you would integrate with your chosen LLM API here.
 */

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Missing message' });
  }
  // TODO: call your AI model API or internal logic.
  // For now, echo back the message with a placeholder response.
  const reply = `You said: ${message}. This is a placeholder response from the NovaCode prototype.`;
  return res.json({ reply });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`NovaCode backend running on port ${port}`);
});