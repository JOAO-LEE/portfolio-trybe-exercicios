const express = require('express');
require('express-async-errors');
const { registryMiddleware } = require('../middlewares/registryMiddleware');
const route = express.Router();
const generateToken = require('../utils/tokenGen')

route.use(registryMiddleware);

route.get('/signup', (_req, resp) => {
  resp.status(200).json({ message: 'servidor signup tá on' })
});

route.post('/signup', async (_req, resp) => {
  const token = await generateToken();
  resp.status(201).json({ token });
});

module.exports = route;

