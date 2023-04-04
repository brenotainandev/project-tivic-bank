const Decimal = require('decimal.js');
const { Account } = require('../database/models');

const accountService = {
  depositById: async ({ balance }, id) => {
    const account = await Account.findOne({
      where: { id },
      attribute: ['balance'],
    });

    if (!account) return undefined;

    if (isNaN(balance)) return 'invalid';

    const balance1 = new Decimal(balance);
    const balance2 = new Decimal(Number(account.balance));

    const value = balance1.plus(balance2);

    const newBalance = await account.update({
      numberAccount: account.numberAccount,
      openingDate: account.openingDate,
      type: account.type,
      balance: value,
      customerId: account.customerId,
    });

    return valueAtt = {
      id: newBalance.id,
      numberAccount: newBalance.numberAccount,
      type: newBalance.type,
      balance: newBalance.balance,
    };
  },

  withdrawalById: async ({ balance }, id) => {
    const account = await Account.findOne({
      where: { id },
      attribute: ['balance'],
    });

    if (!account) return undefined;

    if (balance > Number(account.balance)) return 'negative';

    const balance1 = new Decimal(Number(account.balance));
    const balance2 = new Decimal(balance);

    const value = balance1.minus(balance2);

    if (!value) return 'invalid';

    const newBalance = await account.update({
      numberAccount: account.numberAccount,
      openingDate: account.openingDate,
      type: account.type,
      balance: value,
      customerId: account.customerId,
    });

    return valueAtt = {
      id: newBalance.id,
      numberAccount: newBalance.numberAccount,
      type: newBalance.type,
      balance: newBalance.balance,
    };
  },

  depositNumberAccount: async ({ balance }, numberAccount) => {
    const account = await Account.findOne({
      where: { numberAccount },
      attribute: ['balance'],
    });

    if (!account) return undefined;

    if (isNaN(balance)) return 'invalid';

    const balance1 = new Decimal(balance);
    const balance2 = new Decimal(Number(account.balance));

    const value = balance1.plus(balance2);

    const newBalance = await account.update({
      numberAccount: account.numberAccount,
      openingDate: account.openingDate,
      type: account.type,
      balance: value,
      customerId: account.customerId,
    });

    return valueAtt = {
      id: newBalance.id,
      numberAccount: newBalance.numberAccount,
      type: newBalance.type,
      balance: newBalance.balance,
    };
  },

  withdrawalNumberAccount: async ({ balance }, numberAccount) => {
    const account = await Account.findOne({
      where: { numberAccount },
      attribute: ['balance'],
    });

    if (!account) return undefined;

    if (balance > Number(account.balance)) return 'negative';

    const balance1 = new Decimal(Number(account.balance));
    const balance2 = new Decimal(balance);

    const value = balance1.minus(balance2);

    if (!value) return 'invalid';

    const newBalance = await account.update({
      numberAccount: account.numberAccount,
      openingDate: account.openingDate,
      type: account.type,
      balance: value,
      customerId: account.customerId,
    });


    return valueAtt = {
      id: newBalance.id,
      numberAccount: newBalance.numberAccount,
      type: newBalance.type,
      balance: newBalance.balance,
    };
  },

};

module.exports = accountService;
