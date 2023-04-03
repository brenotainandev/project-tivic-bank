const accountService = require('../services/account.service');
const StatusCode = require('../types/status.code.types');

const accountController = {
  depositById: async (req, res) => {
    try {
      const {
        params: { id },
        body,
      } = req;
      const account = await accountService.depositById(body, id);

      if (account === undefined) {
        return res
          .status(StatusCode.NOT_FOUND)
          .json({ message: 'Conta invalida' });
      }

      if (account === 'invalid') {
        return res
          .status(StatusCode.NOT_FOUND)
          .json({ message: 'Formato de entrada invalido' });
      }

      return res.status(StatusCode.OK).json(account);
    } catch (error) {
      res.status(StatusCode.SERVER_ERROR).json({ message: error });
    }
  },

  withdrawalById: async (req, res) => {
    try {
      const {
        params: { id },
        body,
      } = req;
      const account = await accountService.withdrawalById(body, id);

      if (account === undefined) {
        return res
          .status(StatusCode.NOT_FOUND)
          .json({ message: 'Conta invalida' });
      }

      if (account === 'negative') {
        return res
          .status(StatusCode.NOT_FOUND)
          .json({ message: 'Saldo insuficiente para sacar' });
      }

      if (account === 'invalid') {
        return res
          .status(StatusCode.NOT_FOUND)
          .json({ message: 'Formato de entrada invalido' });
      }

      return res.status(StatusCode.OK).json(account);
    } catch (error) {
      res.status(StatusCode.SERVER_ERROR).json({ message: error });
    }
  },

  depositNumberAccount: async (req, res) => {
    try {
      const {
        params: { numberAccount },
        body,
      } = req;
      const account = await accountService.depositNumberAccount(
        body,
        numberAccount,
      );

      if (account === undefined) {
        return res
          .status(StatusCode.NOT_FOUND)
          .json({ message: 'Conta invalida' });
      }

      if (account === 'invalid') {
        return res
          .status(StatusCode.NOT_FOUND)
          .json({ message: 'Formato de entrada invalido' });
      }

      return res.status(StatusCode.OK).json(account);
    } catch (error) {
      res.status(StatusCode.SERVER_ERROR).json({ message: error });
    }
  },
};

module.exports = accountController;
