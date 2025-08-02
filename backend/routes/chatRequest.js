const express = require('express');
const router = express.Router();
const ChatRequest = require('../models/ChatRequest');

// POST /api/chat-requests – student sends invite to a graduate
router.post('/chat-requests', async (req, res) => {
  try {
    const { studentId, graduateId } = req.body;
    const invite = new ChatRequest({ studentId, graduateId });
    await invite.save();
    res.status(201).json({ message: 'Invitation sent', invite });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/chat-requests/graduate/:gradId – get invites for a graduate
router.get('/chat-requests/graduate/:gradId', async (req, res) => {
  try {
    const invites = await ChatRequest.find({ graduateId: req.params.gradId });
    res.json(invites);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/chat-requests/:id – update invite status (accept/reject)
router.put('/chat-requests/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const invite = await ChatRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(invite);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
