// models/group.js

const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  // Add other properties as needed
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
