module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Staff', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name : { type: DataTypes.STRING, allowNull: false },
    email : { type: DataTypes.STRING, allowNull: false },
    role: {type: DataTypes.ENUM("admin","manager","worker"),
       defaultValue: "worker"},
    CompanyId: DataTypes.UUID,
    contact: DataTypes.STRING,
    access_level: DataTypes.STRING,
    key_code: DataTypes.STRING,
    assigned_responsibilities: DataTypes.STRING
  }, { tableName: 'staff' });
};

// name, role, contact, access_level, assigned_responsibilities