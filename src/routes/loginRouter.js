const express = require('express');
const loginController = require('../controllers/login.controller');
const { validateLogin } = require('../middlewares/login.middleware');

const router = express.Router();

router.post('/', validateLogin, loginController.login);

module.exports = router;