'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('accounts', [
      {
        number_account: '1234567',
        balance: 1000.00,
        opening_date: '2023-03-30',
        type: 'Conta Corrente',
        customer_id: 1,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        number_account: '7654321',
        balance: 5000.00,
        opening_date: '2023-03-30',
        type: 'Conta Corrente',
        customer_id: 2,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('accounts', null, {});
  }
};
