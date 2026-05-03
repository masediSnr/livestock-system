module.exports = (sequelize, DataTypes) => {
  return sequelize.define('StockMovement', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    date : { type: DataTypes.STRING, allowNull: false },
    item: DataTypes.STRING,
    quantity_in: DataTypes.STRING,
    quantity_out: DataTypes.STRING,
    reason: DataTypes.STRING,
    animal_reference: DataTypes.STRING
  }, { tableName: 'stock_movements' });
};

// date, item, quantity in/out, reason (purchase/treatment/wastage), supplier or animal_reference