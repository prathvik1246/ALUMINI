const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gradYear: { type: String, required: true },
  branch:   { type: String, required: true },
  role:     { type: String, enum: ['student', 'graduate'], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
