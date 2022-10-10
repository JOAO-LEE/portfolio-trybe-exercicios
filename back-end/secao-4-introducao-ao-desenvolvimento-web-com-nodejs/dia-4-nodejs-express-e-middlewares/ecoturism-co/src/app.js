const express = require('express');

const app = express();

app.use(express.json());

app.post('/activities', (req, resp) => {
  console.log(req.body);
  resp.status(201).json({ message: "Atividade cadastrada com sucesso!" })
});

app.get('/activities', (req, resp) => {
  const activities = req.body;
  resp.status(200).json(activities)
})

module.exports = {
  app
};