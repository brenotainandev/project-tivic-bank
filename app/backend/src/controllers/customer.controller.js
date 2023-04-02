const customerService = require('../services/customer.service');
const StatusCode = require('../types/status.code.types');

const customerController = {

  getAllCustomers: async (_req, res) => {
    try {
      const customer = await customerService.getAllCustomers();
  
      res.status(StatusCode.OK).json(customer);
    } catch (error) {
      res.status(StatusCode.SERVER_ERROR).json({ message: error });
    }
  },

  getCustomerById: async (req, res) => {
    try {
      const customer = await customerService.getCustomerById(req.params.id);

      if (!customer) {
        return res.status(StatusCode.NOT_FOUND).json({ message: 'Cliente não cadastrado' });
      }
    
      return res.status(StatusCode.OK).json(customer);
    } catch (error) {
      res.status(StatusCode.SERVER_ERROR).json({ message: error });
    }
  },

  getAllCustomersAndAccount: async (_req, res) => {
    try {
      const customer = await customerService.getAllCustomersAndAccount();
  
      res.status(StatusCode.OK).json(customer);
    } catch (error) {
      res.status(StatusCode.SERVER_ERROR).json({ message: error });
    }
  },

  getCustomerAndAccountById: async (req, res) => {
    try {
      const customer = await customerService.getCustomerAndAccountById(req.params.id);

      if (!customer) {
        return res.status(StatusCode.NOT_FOUND).json({ message: 'Cliente não cadastrado' });
      }
    
      return res.status(StatusCode.OK).json(customer);
    } catch (error) {
      res.status(StatusCode.SERVER_ERROR).json({ message: error });
    }
  },

 };

module.exports = customerController;