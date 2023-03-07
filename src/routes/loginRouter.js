const express = require('express');
const userController = require('../controllers/user.controller');
const { validateLogin } = require('../middlewares/login.middleware');

const router = express.Router();

router.post('/', validateLogin, userController.login);

module.exports = router;