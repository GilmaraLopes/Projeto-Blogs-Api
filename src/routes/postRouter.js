const express = require('express');

const postController = require('../controllers/post.controller');
const validateToken = require('../utils/validateToken');

const router = express.Router();

router.get('/', validateToken, postController.getPosts);
module.exports = router;