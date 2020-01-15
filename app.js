const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

mongoose.set('useCreateIndex', true);

const toolsModel = require('./models/tools');
const usersModel = require('./models/users');

const toolsRouter = require('./routes/tools');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/tools', toolsRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

module.exports = app;
