const express = require('express');
const { booksController } = require('../controller/')

const router = express.Router();

router.get('/', booksController.getBooks);

router.post('/', booksController.insertBook);

router.get('/:id', booksController.getById);


module.exports = router;