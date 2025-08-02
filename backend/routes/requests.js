const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Request = require('../models/Request'); // Create a Request model

// POST /api/requests – send a query from student to graduate
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { to, message } = req.body;
    const from = req.user._id;

    const newRequest = new Request({ from, to, message });
    await newRequest.save();

    res.status(201).json({ message: 'Request sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/incoming', authMiddleware, async (req, res) => {
  try {
    const requests = await Request.find({ to: req.user._id })
      .populate('from', 'fullName email') // shows student info
      .sort({ sentAt: -1 });

    res.json(requests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/requests/:id/accept
router.put('/:id/accept', authMiddleware, async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    if (!request || request.to.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    request.status = 'accepted';
    await request.save();
    res.json({ message: 'Request accepted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/requests/:id/reject
router.put('/:id/reject', authMiddleware, async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    if (!request || request.to.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    request.status = 'rejected';
    await request.save();
    res.json({ message: 'Request rejected' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
