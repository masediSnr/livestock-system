module.exports = (sequelize, DataTypes) => {
  return sequelize.define('FeedLog', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    camp_id: DataTypes.STRING,
    feed_quantity: DataTypes.INTEGER,
    cost: DataTypes.FLOAT,
    company_id: DataTypes.STRING
  }, { tableName: 'feed_log' });
};