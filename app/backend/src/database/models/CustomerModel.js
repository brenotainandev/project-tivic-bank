'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const createCustomertModel = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    name:DataTypes.STRING,
    cpf:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    phone:DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'customer'
  })
  return Customer;
};

module.exports = createCustomertModel
