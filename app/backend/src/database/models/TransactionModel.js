'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const createTransactionModel = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    dateTime:DataTypes.DATE,
    type:DataTypes.STRING,
    amount:DataTypes.DECIMAL,
    accountId:{ 
      type: DataTypes.INTEGER, 
      foreignKey: true 
    }
  }, {
    underscored: true,
    tableName: 'transactions'
  });

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Account,
    { foreignKey: 'accountId', as: 'account' });
  };

  return Transaction;
};

module.exports = createTransactionModel
