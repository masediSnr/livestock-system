module.exports = (sequelize, DataTypes) => {
  return sequelize.define('FeedReport', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    event_type : { type: DataTypes.STRING, allowNull: false },
    reporter: DataTypes.STRING,
    CompanyId: DataTypes.UUID,
    receiver: DataTypes.STRING,
    message: DataTypes.STRING,
    read: DataTypes.BOOLEAN
  }, { tableName: 'feed_report' });
};