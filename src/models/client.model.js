module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Client', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    company_name : { type: DataTypes.STRING, allowNull: false },
    contact_person: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    SLA_reference: DataTypes.STRING,
    SLA_requirements: DataTypes.STRING,
    payment_terms: DataTypes.STRING
  }, { tableName: 'clients' });
};
// company_name, contact_person, phone, email, SLA_reference, SLA_requirements, payment_terms