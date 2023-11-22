const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Endpoint to get all groups
router.get('/', studentController.getAllGroups);

// Endpoint to join a group (dummy implementation)
router.post('/:groupId/join', groupController.joinGroup);

module.exports = router;
