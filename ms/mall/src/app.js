var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

import config from './config';
import loaders from './loaders';
import serviceSupplier from './services/supplier';

import { handleRestApiError } from './controllers/apiErrors';
import apiRouter from './routes/api';

const app = express();

app.config = config;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/mall/api/v1', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(handleRestApiError);

// start services
async function startServices() {
  const providers = await loaders.load({ config, expressApp: app });

  await serviceSupplier.initServices({ providers });
}

startServices();

module.exports = app;
