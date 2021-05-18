'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const notFoundHndler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const clothesRoutes = require('./routes/clothes.js');
const foodRoutes = require('./routes/food.js');

const logger = require('./middleware/logger.js');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(logger);
app.use('/api/v1/clothes/', clothesRoutes);
app.use('/api/v1/food/', foodRoutes);
app.use('*', notFoundHndler);
app.use(errorHandler);


app.get('/', homeHandler);
function homeHandler(req, res) {
  res.send('Home Page');
}


module.exports = {
  app: app,
  start:start,
};

function start(port) {
  app.listen(port, () => console.log(`Server is listening to port ${port}`));
}