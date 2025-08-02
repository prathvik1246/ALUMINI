const express = require('express');
const router = express.Router();
const Graduate = require('../models/Graduate');
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/graduates – create a new graduate
router.post('/', authMiddleware, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    const { name, field, company } = req.body;
    if (!name || !field || !company) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const grad = new Graduate({
      user: req.user._id,
      name,
      field,
      company
    });

    await grad.save();
    res.status(201).json({ message: 'Graduate added', graduate: grad });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

// GET /api/graduates – list all graduates
router.get('/', async (req, res) => {
  try {
    const grads = await Graduate.find().populate('user', 'fullName email');
    res.json(grads);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
