const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
  graduate:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  student:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message:      { type: String, required: true },
  qualifications: [String],
}, { timestamps: true });

module.exports = mongoose.model('Referral', referralSchema);