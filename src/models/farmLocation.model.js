module.exports = (sequelize, DataTypes) => {
  return sequelize.define('FarmLocation', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    Camps : { type: DataTypes.STRING, allowNull: false },
    pens: DataTypes.STRING,
    paddocks_name: DataTypes.STRING,
    capacity: DataTypes.STRING,
    current_occupancy: DataTypes.STRING,
    animal_type: DataTypes.STRING,
    notes: DataTypes.STRING
  }, { tableName: 'farm_locations' });
};

// Camps, pens, paddocks_name, capacity, current_occupancy, animal_type, notes