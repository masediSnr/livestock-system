module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Medication', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    product_name: DataTypes.STRING,
    active_ingredient: DataTypes.STRING,
    withdrawal_period_cattle: DataTypes.STRING,
    withdrawal_period_sheep: DataTypes.STRING,
    withdrawal_period_poultry: DataTypes.STRING,
    supplier: DataTypes.STRING,
    registration_number: DataTypes.STRING
  }, { tableName: 'medications' });
};
// product_name, active_ingredient, withdrawal_period_(cattle/sheep/poultry), supplier, registration_number