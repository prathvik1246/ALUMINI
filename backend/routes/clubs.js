const express = require('express');
const router = express.Router();
const Club = require('../models/Club');
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/clubs – create a new club
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name } = req.body;
    const head = req.user._id; // current user from token

    const club = new Club({ name, head });
    await club.save();

    res.status(201).json({ message: 'Club created', club });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/clubs/:id/join – Add current user as member of the club
router.post('/:id/join', authMiddleware, async (req, res) => {
  try {
    const clubId = req.params.id;
    const userId = req.user._id;
    const club = await Club.findById(clubId);
    if (!club) {
      return res.status(404).json({ message: 'Club not found' });
    }
    // Prevent duplicate members
    if (club.members.includes(userId)) {
      return res.status(400).json({ message: 'Already a member' });
    }
    club.members.push(userId);
    await club.save();
    res.json({ message: 'Joined club', club });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/clubs – list all clubs
router.get('/', async (req, res) => {
  try {
    const clubs = await Club.find()
      .populate('head', 'fullName')   // populate head's fullName
      .exec();
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
