const express = require('express');

const app = express();

app.get('/myActivities', (_req, resp) => resp.status(200).json(activities));

app.get('/myActivities/:id', (req, resp) => {
  const { id } = req.params;
  const activityById = activities
    .filter((activity) => activity.id === Number(id));
  resp.status(200).json(activityById);
});

app.get('/filter/myActivities/', (req, resp) => {
  const { status } = req.query;
  let activityByFilter = activities;
  if (status) {
    activityByFilter = activities.filter((activity) => activity.status === status);
  }
  resp.status(200).json({ activities: activityByFilter });
});

app.get('/search/myActivities/', (req, resp) => {
  const { q } = req.query;

  const searchedActivity = activities.filter((activity) => activity.description.includes(q));

  if (!searchedActivity) {
    return [];
  }
  resp.status(200).json({ activities: searchedActivity });
});

module.exports = {
  app,
};
