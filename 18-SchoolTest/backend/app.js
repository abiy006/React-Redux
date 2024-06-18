const bodyParser = require('body-parser');
const express = require('express');

const ccrudRoutes = require('./routes/ccruds');
const bcrudRoutes = require('./routes/bcruds');
const acrudRoutes = require('./routes/acruds');
const zcrudRoutes = require('./routes/zcruds');
const ycrudRoutes = require('./routes/ycruds');
const xcrudRoutes = require('./routes/xcruds');
const studentRoutes = require('./routes/students');
const eventRoutes = require('./routes/events');
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

app.use(authRoutes);

app.use('/events', eventRoutes);
app.use('/students', studentRoutes);
app.use('/xcruds', xcrudRoutes);
app.use('/ycruds', ycrudRoutes);
app.use('/zcruds', zcrudRoutes);
app.use('/acruds', acrudRoutes);
app.use('/bcruds', bcrudRoutes);
app.use('/ccruds', ccrudRoutes);


app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

app.listen(8080);
