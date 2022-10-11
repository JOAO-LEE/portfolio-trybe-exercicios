const express = require('express');
require('express-async-errors');
const activitiesRouter = require('./routes/activities.router')
const signUpRouter = require('./routes/signUp.router')

const app = express();

app.use(activitiesRouter);
app.use(signUpRouter);

module.exports = {
  app
};

