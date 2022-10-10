const express = require('express');
const { validateName } = require('./middlewares/nameValidation');
const { priceValidation } = require('./middlewares/priceValidation');
const { descriptionValidation, validFormatDate, validateRating, validateDifficulty } = require('./middlewares/descriptionValidation');
const { registryMiddleware } = require('./middlewares/peopleRegistryMiddleware');

const app = express();

app.use(express.json());

app.use(priceValidation, validateName, descriptionValidation, validFormatDate, validateRating, validateDifficulty);

app.get('/signup', registryMiddleware, (req, resp) => {
  const accountInfo = req.body
  console.log(accountInfo)
  resp.status(200).json(accountInfo);
});

app.post('/signup', registryMiddleware, (_req, resp) => {
  resp.status(201).json({ message: "Atividade cadastrada com sucesso!" })
});

app.post('/activities', (_req, resp) => {
  resp.status(201).json({ message: "Atividade cadastrada com sucesso!" })
});

app.get('/activities', (req, resp) => {
  const activities = req.body;
  console.log(activities);
  resp.status(200).json(activities)
});




module.exports = {
  app
};