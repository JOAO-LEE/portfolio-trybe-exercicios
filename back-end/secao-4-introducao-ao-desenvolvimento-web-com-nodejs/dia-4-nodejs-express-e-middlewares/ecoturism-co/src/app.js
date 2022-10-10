const express = require('express');
const { validateName } = require('./middlewares/nameValidation');
const { priceValidation } = require('./middlewares/priceValidation');
const { descriptionValidation } = require('./middlewares/descriptionValidation');

const app = express();

app.use(express.json());

app.use(priceValidation, validateName, descriptionValidation);

app.post('/activities', (_req, resp) => {
  resp.status(201).json({ message: "Atividade cadastrada com sucesso!" })
});

app.get('/activities', (req, resp) => {
  const activities = req.body;
  resp.status(200).json(activities)
})

module.exports = {
  app
};