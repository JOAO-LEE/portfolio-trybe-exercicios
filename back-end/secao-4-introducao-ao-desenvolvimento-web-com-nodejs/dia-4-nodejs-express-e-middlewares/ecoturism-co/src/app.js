const express = require('express');
const { validateName } = require('./middlewares/nameValidation');
const { priceValidation } = require('./middlewares/priceValidation');
const { descriptionValidation, validFormatDate, validateRating, validateDifficulty } = require('./middlewares/descriptionValidation');
const { registryMiddleware } = require('./middlewares/peopleRegistryMiddleware');

const app = express();

app.use(express.json());

app.use(validateName, priceValidation, descriptionValidation, validFormatDate, validateRating, validateDifficulty);

app.get('/activities', (req, resp) => {
  const activities = req.body;
  console.log(activities);
  resp.status(200).json(activities)
});

app.post('/activities', (_req, resp) => {
  resp.status(201).json({ message: "Atividade cadastrada com sucesso!" })
});

module.exports = {
  app
};