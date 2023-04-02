'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const createAccountModel = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    numberAccount:DataTypes.STRING,
    openingDate:DataTypes.DATE,
    type:DataTypes.STRING,
    customerId:{ 
      type: DataTypes.INTEGER, 
      foreignKey: true 
    }
  }, {
    underscored: true,
    tableName: 'accounts'
  });

  Account.associate = (models) => {
    Account.belongsTo(models.Customer,
    { foreignKey: 'customerId', as: 'customer' });
  };

  return Account;
};

module.exports = createAccountModel
