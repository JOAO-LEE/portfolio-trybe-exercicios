const express = require('express');
const { activities } = require('./activities');

const app = express();

app.get('/myActivities', (_req, resp) => resp.status(200).json(activities));

// app.get('/myActivities/:id', (_, resp) => {
//   const { id } = resp.body

// });
module.exports = {
  app
};