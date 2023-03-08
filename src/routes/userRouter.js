const express = require('express');
const userController = require('../controllers/user.controller');
const { validateUser } = require('../middlewares/user.middleware');
const validateToken = require('../utils/validateToken');

const router = express.Router();

router.post('/', validateUser, userController.createUser);
router.get('/', validateToken, userController.getUser);
router.get('/:id', validateToken, userController.getUserById);

module.exports = router;