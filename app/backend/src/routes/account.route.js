const express = require('express');
const accountController = require('../controllers/account.controller');

const accountRoute = express.Router();

accountRoute.put('/deposit/:id', accountController.depositById);
accountRoute.put('/deposit/number/:numberAccount', accountController.depositNumberAccount);
accountRoute.put('/withdrawal/:id', accountController.withdrawalById);

module.exports = accountRoute;
