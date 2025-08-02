const express = require('express');
const router  = express.Router();
const Invitation = require('../models/Invitation');

// POST invite graduate
router.post('/', async (req, res) => {
  const inv = new Invitation(req.body);
  await inv.save();
  res.status(201).json(inv);
});

// PUT accept
router.put('/:id/accept', async (req, res) => {
  const inv = await Invitation.findByIdAndUpdate(req.params.id,
    { status: 'accepted' }, { new: true });
  res.json(inv);
});

module.exports = router;