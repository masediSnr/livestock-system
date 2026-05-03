module.exports = (sequelize, DataTypes) => {
  return sequelize.define('AnimalMovement', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    animals_moved : { type: DataTypes.STRING, allowNull: false },
    from_location: DataTypes.STRING,
    to_location: DataTypes.STRING,
    purpose: DataTypes.STRING,
    permit_number: DataTypes.STRING,
    driver: DataTypes.STRING,
    vehicle: DataTypes.STRING
  }, { tableName: 'animal_movement' });
};

// date, animals moved (multi-select), from location, to location, purpose, permit_number, driver, vehicle