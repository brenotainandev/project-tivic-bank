const accountService = require('../services/account.service');
const StatusCode = require('../types/status.code.types');

const accountController = {
  editaccount: async (req, res) => {
    try {
      const { params: { id }, body } = req;
      const account = await accountService.depositById(body, id);

      if (account === undefined) {
        return res.status(StatusCode.NOT_FOUND).json({ message: 'Conta invalida' });
      }

      return res.status(StatusCode.OK).json(account);
    } catch (error) {
      res.status(500).json(StatusCode.SERVER_ERROR).json({ message: error });
    }
  },
 };

module.exports = accountController;