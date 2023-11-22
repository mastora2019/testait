// routes/groups.js

const express = require('express');
const router = express.Router();
const groupsController = require('../controllers/groups');

router.get('/groups', groupsController.getAllGroups);
router.post('/groups', groupsController.createGroup);
router.get('/groups/:groupId', groupsController.getGroupById);
router.put('/groups/:groupId', groupsController.updateGroup);
router.delete('/groups/:groupId', groupsController.deleteGroup);

module.exports = router;
