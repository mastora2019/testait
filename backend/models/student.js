const mongoose = require('mongoose');

const studentGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const StudentGroup = mongoose.model('StudentGroup', studentGroupSchema);

module.exports = StudentGroup;
