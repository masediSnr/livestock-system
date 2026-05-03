module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Animal', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    tag_number: { type: DataTypes.STRING, allowNull: false },
    Animal_ID: {type: DataTypes.STRING, allowNull: false },
    species: DataTypes.STRING,
    breed: DataTypes.STRING,
    dob: {type: DataTypes.DATE, allowNull: false },
    origin: DataTypes.STRING,
    current_camp: DataTypes.STRING,
    assigned_vet: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    purchase_price: DataTypes.FLOAT,
    avg: DataTypes.FLOAT,
    accumulated_vet_cost: { type: DataTypes.FLOAT, defaultValue: 0},
    accumulated_feed_cost: { type: DataTypes.FLOAT, defaultValue: 0},
    accumulated_medication_cost: { type: DataTypes.FLOAT, defaultValue: 0},
    CompanyId: DataTypes.UUID,
    status: { type: DataTypes.STRING, defaultValue: 'Quarantine' }
  }, { tableName: 'animals'});
};

// ID, species, breed, DOB, weight, origin, tag numbers, status, assigned_vet, current_location/camp, purchase_price