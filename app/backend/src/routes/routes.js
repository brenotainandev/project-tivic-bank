const express = require('express');
const customerRoute = require('./customer.route');

const routes = express.Router({ mergeParams: true });

routes.use('/customer', customerRoute);

module.exports = routes;