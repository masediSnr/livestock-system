module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Company', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    company_name: DataTypes.STRING,
    owner: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    key_code: DataTypes.STRING,
    subscription: DataTypes.ENUM('basic','standard','advanced'),
    billing_date: DataTypes.DATE,
  }, { tableName: 'company' });
};