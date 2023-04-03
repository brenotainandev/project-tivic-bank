const express = require('express');
const accountController = require('../controllers/account.controller');

const accountRoute = express.Router();

accountRoute.put('/deposit/:id', accountController.depositById);

module.exports = accountRoute;
