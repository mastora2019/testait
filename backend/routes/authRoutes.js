const express = require('express');
const authController = require('../controllers/authContoller');
const groupsController =require('../controllers/groupsController')

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/groups', groupsController);
router.post('/student', studentController);

module.exports = router;
