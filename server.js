const express = require('express');
const accountRouter = require('./accounts/account-router');

// const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/accounts', accountRouter);

module.exports = server;
