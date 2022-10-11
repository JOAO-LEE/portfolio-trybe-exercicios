const express = require('express');
require('express-async-errors');
const { validateName } = require('../middlewares/nameValidation');
const { priceValidation } = require('../middlewares/priceValidation');
const { descriptionValidation, validFormatDate, validateRating, validateDifficulty } = require('../middlewares/descriptionValidation');

const route = express.Router();

route.use(express.json());

route.post('/activities', validateName, priceValidation, descriptionValidation, validFormatDate, validateRating, validateDifficulty, (_req, resp) => {
  resp.status(201).json({ message: "Atividade cadastrada com sucesso!" })
});

route.get('/activities', (req, resp) => {
  const activities = req.body;
  console.log(activities);
  resp.status(200).json(activities);
});

module.exports = route;
