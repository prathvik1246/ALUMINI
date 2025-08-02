const mongoose = require('mongoose');

const invitationSchema = new mongoose.Schema({
  student:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  graduate:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status:     { type: String, enum: ['pending','accepted','rejected'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Invitation', invitationSchema);