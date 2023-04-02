const { Customer, Account } = require('../database/models');

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

  getAllCustomersAndAccount: async () => {
    const customers = await Customer.findAll({
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Account,
          as: 'accounts',
        },
      ],
    });
    return customers;
  },

  getCustomerAndAccountById: async (id) => {
    const customer = await Customer.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Account,
          as: 'accounts',
        },
      ],
    });
    return customer;
  },
 };

module.exports = customerService;