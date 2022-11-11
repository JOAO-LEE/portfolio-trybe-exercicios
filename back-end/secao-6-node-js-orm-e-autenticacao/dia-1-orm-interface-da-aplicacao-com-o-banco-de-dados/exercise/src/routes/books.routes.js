const express = require('express');
const { booksController } = require('../controller/')

const router = express.Router();

router.get('/', booksController.getBooks);

module.exports = router;