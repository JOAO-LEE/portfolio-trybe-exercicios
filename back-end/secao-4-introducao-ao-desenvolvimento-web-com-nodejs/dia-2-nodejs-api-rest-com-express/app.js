const express = require('express');
const { activities } = require('./activities');

const app = express();

app.get('/myActivities', (_req, resp) => resp.status(200).json(activities));

app.get('/myActivities/:id', (req, resp) => {
  const { id } = req.params;
  const activityById = activities
    .filter((activity) => activity.id === Number(id));
  resp.status(200).json(activityById);
});

module.exports = {
  app
};