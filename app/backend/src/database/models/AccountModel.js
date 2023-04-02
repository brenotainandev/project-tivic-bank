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
    balance:DataTypes.DECIMAL,
    customerId:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    }
  }, {
    underscored: true,
    tableName: 'accounts'
  });

  Account.associate = (models) => {
    Account.belongsTo(models.Customer,
    { foreignKey: 'customerId', as: 'customers' });
  };

  return Account;
};

module.exports = createAccountModel
