const express = require('express');
const customerController = require('../controllers/customer.controller');

const customerRoute = express.Router();

customerRoute.get('/', customerController.getAllCustomers);
customerRoute.get('/search/:id', customerController.getCustomerById);
customerRoute.get('/account/', customerController.getAllCustomersAndAccount);
customerRoute.get('/account/:id', customerController.getCustomerAndAccountById);

module.exports = customerRoute;