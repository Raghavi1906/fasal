const mongoose = require('mongoose');

const movieListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  movies: [{ type: String }],
  isPublic: { type: Boolean, default: false },
});

module.exports = mongoose.model('MovieList', movieListSchema);
