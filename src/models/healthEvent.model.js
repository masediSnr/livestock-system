module.exports = (sequelize, DataTypes) => {
  return sequelize.define('HealthEvent', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    type: DataTypes.STRING,
    diagnosis: DataTypes.STRING,
    vet_name: DataTypes.STRING,
    date: DataTypes.STRING,
    follow_up_date: DataTypes.STRING,
    body_condition_score: DataTypes.STRING,
    treatment_notes: DataTypes.TEXT,
    outcome: DataTypes.TEXT,
    date: DataTypes.DATE,
    AnimalId: DataTypes.UUID
  }, { tableName: 'health_events' });
};

//  date, diagnosis, treatment_notes, vet_name, follow_up_date, outcome, body_condition_score