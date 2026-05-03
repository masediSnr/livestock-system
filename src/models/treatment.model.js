module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Treatment', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    HealthEventId: DataTypes.UUID,
    medication: DataTypes.STRING,
    med_price: DataTypes.FLOAT,
    vet_cost: DataTypes.FLOAT,
    dosage: DataTypes.STRING,
    route: DataTypes.STRING,
    batch_number: DataTypes.STRING,
    days_of_treatment: DataTypes.STRING,
    withdrawal_days: DataTypes.STRING,
    withdrawal_end_date : DataTypes.STRING
  }, { tableName: 'treatments' });
};

//  medication name, dosage, route, batch_number, days_of_treatment, withdrawal_days, withdrawal end date (auto-calculated)