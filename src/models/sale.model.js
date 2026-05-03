module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Sale', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    date : { type: DataTypes.STRING, allowNull: false },
    animal_sold: DataTypes.STRING,
    client: DataTypes.STRING,
    sale_price_per_head: DataTypes.STRING,
    total: DataTypes.STRING,
    SLA_compliance: DataTypes.STRING,
    ClientId: DataTypes.UUID,
    invoice_number: DataTypes.STRING
  }, { tableName: 'sales' });
};

//  date, animals_sold, client, sale_price_per_head, total, SLA_compliance confirmed (checkbox), invoice_number