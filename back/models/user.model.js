const mongoose = require('mongoose');

// Define Schemes
const userSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  userPW: { type: String, required: true }
});

// Create Model & Export
module.exports = mongoose.model('User', userSchema);