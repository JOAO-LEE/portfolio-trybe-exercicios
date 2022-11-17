const express = require('express');
const { booksController } = require('../controller/')

const router = express.Router();


router.get('/', booksController.getBooks);

router.get('/:id', booksController.getById);

router.post('/', booksController.insertBook);

router.put('/:id', booksController.updateBook);

module.exports = router;