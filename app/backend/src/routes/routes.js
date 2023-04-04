const express = require('express');
const customerRoute = require('./customer.route');
const accountRoute = require('./account.route');

const routes = express.Router({ mergeParams: true });

routes.use('/customer', customerRoute);
routes.use('/account', accountRoute);

module.exports = routes;