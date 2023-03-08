const express = require('express');

const categoriesController = require('../controllers/categories.controller');
const validateToken = require('../utils/validateToken');

const router = express.Router();

router.post('/', validateToken, categoriesController.createCategorie);

module.exports = router;