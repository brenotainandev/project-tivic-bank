const express = require('express');
const customerController = require('../controllers/customer.controller');

const customerRoute = express.Router();

customerRoute.get('/', customerController.getAllCustomers);
customerRoute.get('/:id', customerController.getCustomerById);

module.exports = customerRoute;