const express = require('express');
const { booksController } = require('../controller/')

const router = express.Router();

router.get('/', booksController.getBooks);

router.get('/:id', booksController.getById);

module.exports = router;