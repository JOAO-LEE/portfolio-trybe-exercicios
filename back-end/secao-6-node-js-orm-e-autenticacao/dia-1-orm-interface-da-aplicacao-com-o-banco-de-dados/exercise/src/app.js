const express = require('express');
const { bookRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/books', bookRouter);

module.exports = app;