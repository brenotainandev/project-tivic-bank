const { Account } = require('../database/models');

const accountService = {
  depositById: async ({ balance }, id) => {
    const account = await Account.findOne({
      where: { id },
      attribute: ['balance'],
    });

    if (!account) return undefined;

    const value = balance + Number(account.balance);

    const newBalance = await account.update({
      numberAccount: account.numberAccount,
      openingDate: account.openingDate,
      type: account.type,
      balance: value,
      customerId: account.customerId,
    });

    return newBalance;
  },
};

module.exports = accountService;
