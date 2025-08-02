const express = require('express');
const router = express.Router();
const Referral = require('../models/Referral');

// POST /api/referrals – graduate sends a referral to a student
router.post('/referrals', async (req, res) => {
  try {
    const { graduateId, studentId, message, qualifications } = req.body;
    const ref = new Referral({ graduateId, studentId, message, qualifications });
    await ref.save();
    res.status(201).json({ message: 'Referral sent', referral: ref });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/referrals/:studentId – list referrals for a student
router.get('/referrals/:studentId', async (req, res) => {
  try {
    const refs = await Referral.find({ studentId: req.params.studentId });
    res.json(refs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
