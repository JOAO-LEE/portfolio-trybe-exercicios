const express = require('express');
const { validateName } = require('./middlewares/nameValidation');

const app = express();

app.use(express.json());

app.post('/activities', validateName, (_req, resp) => {
  resp.status(201).json({ message: "Atividade cadastrada com sucesso!" })
});

app.get('/activities', (req, resp) => {
  const activities = req.body;
  resp.status(200).json(activities)
})

module.exports = {
  app
};