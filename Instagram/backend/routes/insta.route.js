const express = require('express');
const { home, signup, login, getUserDetails } = require('../controllers/insta.controller.js');
const jwtAuth = require('../middleware/jwt.Auth.js');

const router = express.Router();

router.get('/home', home);
router.post('/signup', signup);
router.post('/login', login);
router.get('/user', jwtAuth, getUserDetails);

module.exports = router;