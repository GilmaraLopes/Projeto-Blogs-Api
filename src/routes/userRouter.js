const express = require('express');
const userController = require('../controllers/user.controller');
const { validateUser } = require('../middlewares/user.middleware');

const router = express.Router();

router.post('/', validateUser, userController.createUser);

module.exports = router;