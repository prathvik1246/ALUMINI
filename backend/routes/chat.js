const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const ChatMessage = require('../models/ChatMessage');

// Send message
router.post('/', authMiddleware, async (req, res) => {
  const { to, message } = req.body;
  const from = req.user._id;

  try {
    const chat = new ChatMessage({ from, to, message });
    await chat.save();
    res.status(201).json(chat);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Get chat history with a user
router.get('/:userId', authMiddleware, async (req, res) => {
  const userId = req.params.userId;
  const currentUser = req.user._id;

  try {
    const messages = await ChatMessage.find({
      $or: [
        { from: currentUser, to: userId },
        { from: userId, to: currentUser }
      ]
    }).sort({ sentAt: 1 });

    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load chat history' });
  }
});

module.exports = router;
