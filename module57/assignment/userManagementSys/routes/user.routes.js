const express = require('express');
const { home, createUser, LogInUser } = require('../controllers/user.controller.js');

const router = express.Router();

router.get('/', home);
router.post('/createuser', createUser);
router.post('/login', LogInUser);

module.exports = router;