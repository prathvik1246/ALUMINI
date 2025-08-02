const mongoose = require('mongoose');

const chatRequestSchema = new mongoose.Schema({
  studentId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  graduateId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status:     { type: String, enum: ['pending','accepted','rejected'], default: 'pending' }
});

module.exports = mongoose.model('ChatRequest', chatRequestSchema);
