const { Customer, Account } = require('../database/models');

const customerService = {
  getAllCustomers: async () => {
    const customers = await Customer.findAll({
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
    return customers;
  },

  getCustomerById: async (id) => {
    const customer = await Customer.findOne({
      where: { id },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
    return customer;
  },

  getAllCustomersAndAccount: async () => {
    const customers = await Customer.findAll({
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      include: [
        {
          model: Account,
          as: 'accounts',
          attributes: { exclude: ['CustomerId', 'updatedAt', 'createdAt'] },
        },
      ],
    });
    return customers;
  },

  getCustomerAndAccountById: async (id) => {
    const customer = await Customer.findOne({
      where: { id },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      include: [
        {
          model: Account,
          as: 'accounts',
          attributes: { exclude: ['CustomerId', 'updatedAt', 'createdAt'] },
        },
      ],
    });
    return customer;
  },
 };

module.exports = customerService;