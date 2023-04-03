const { Account } = require('../database/models');

const accountService = {
  depositById: async ({ balance }, id) => {
    const account = await Account.findOne({
      where: { id },
      attributes: ['balance'],
    });

    if (!account) return undefined;

    const newBalance = await account.update({ balance });

    return newBalance;
  },
};

module.exports = accountService;
