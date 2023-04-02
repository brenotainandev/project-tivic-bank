const { Customer } = require('../database/models');

const customerService = {
  getAllCustomers: async () => {
    const customers = await Customer.findAll({
      attributes: { exclude: ['password'] },
    });
    return customers;
  },

  getCustomerById: async (id) => {
    const customer = await Customer.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });
    return customer;
  },
 };

module.exports = customerService;