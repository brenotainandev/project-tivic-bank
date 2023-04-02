const customerService = require('../services/customer.service');
const StatusCode = require('../types/status.code.types');

const customerController = {

  getAllCustomers: async (_req, res) => {
    try {
      const customer = await customerService.getAllCustomers();
  
      res.status(StatusCode.OK).json(customer);
    } catch (error) {
      res.status(StatusCode.SERVER_ERROR).json({ message: 'Erro ao tentar realizar operação' });
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
      res.status(StatusCode.SERVER_ERROR).json({ message: 'Erro ao tentar realizar operação' });
    }
  },

 };

module.exports = customerController;