const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  head:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Club', clubSchema);