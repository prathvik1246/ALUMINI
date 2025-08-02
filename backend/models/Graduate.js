const mongoose = require('mongoose');

const graduateSchema = new mongoose.Schema({
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name:      { type: String, required: true },
  field:     { type: String, required: true },
  company:   { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Graduate', graduateSchema);