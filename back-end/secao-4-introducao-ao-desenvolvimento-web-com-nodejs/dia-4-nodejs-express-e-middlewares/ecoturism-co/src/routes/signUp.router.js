const express = require('express');
require('express-async-errors');
const { registryMiddleware } = require('../middlewares/registryMiddleware');
const route = express.Router();

route.use(registryMiddleware);

route.get('/signup', (_req, resp) => {
  resp.status(200).json({ message: 'servidor signup tá on' })
});

route.post('/signup', (req, resp) => {
  const personRegistry = req.body;
  resp.status(201).json(personRegistry);
});

module.exports = route;

