const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/teste', {useNewUrlParser: true});

const toolsModel = require('./models/tools');

const toolsRouter = require('./routes/tools');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/tools', toolsRouter);

module.exports = app;
