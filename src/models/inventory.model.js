module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Inventory', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    item_name : { type: DataTypes.STRING, allowNull: false },
    category: DataTypes.STRING,
    current_quantity: DataTypes.STRING,
    capacity: DataTypes.STRING,
    unit: DataTypes.STRING,
    low_stock_threshold: DataTypes.STRING,
    expiry_date: DataTypes.STRING,
    supplier: DataTypes.STRING,
    cost_per_unit: DataTypes.STRING
  }, { tableName: 'inventories' });
};

// item_name, category, current_quantity, unit, low_stock_threshold, expiry_date, supplier, cost_per_unit
