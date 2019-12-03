const express = require('express');
const app = express();
const compression = require('compression');

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');
const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// gzip compression for responses
app.use(compression);

// body-parser
app.use(express.json());

// routes
moviesApi(app);

// catch 404
app.use(notFoundHandler);

// errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

const debug = require('debug')('app:server');
app.listen(config.port, () => {
  debug(`App linstening on http://localhost:${config.port}`);
});
