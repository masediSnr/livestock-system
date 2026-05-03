module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Task', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    task_type : { type: DataTypes.STRING, allowNull: false },
    assigned_to: DataTypes.STRING,
    due_date: DataTypes.STRING,
    linked_animal: DataTypes.STRING,
    status: DataTypes.STRING,
    StaffId: DataTypes.UUID,
    completion_notes: DataTypes.STRING
  }, { tableName: 'tasks' });
};

// task_type, assigned_to, due_date, linked_animal (optional), status, completion_notes