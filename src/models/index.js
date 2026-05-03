const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Company = require('./company.model')(sequelize, Sequelize);
db.FeedLog = require('./feedLog.model')(sequelize, Sequelize);
db.Animal = require('./animal.model')(sequelize, Sequelize);
db.ReportFeed = require('./feedReport.model')(sequelize, Sequelize);
db.HealthEvent = require('./healthEvent.model')(sequelize, Sequelize);
db.Treatment = require('./treatment.model')(sequelize, Sequelize);
db.Medication = require('./medication.model')(sequelize, Sequelize);
db.Client = require('./client.model')(sequelize, Sequelize);
db.Sale = require('./sale.model')(sequelize, Sequelize);
db.Staff = require('./staff.model')(sequelize, Sequelize);
db.Task = require('./task.model')(sequelize, Sequelize);
db.Inventory = require('./inventory.model')(sequelize, Sequelize);
db.StockMovement = require('./stockMovement.model')(sequelize, Sequelize);
db.AnimalMovement = require('./animalMovement.model')(sequelize, Sequelize);
db.FarmLocation = require('./farmLocation.model')(sequelize, Sequelize);

// RELATIONSHIPS
db.Company.hasMany(db.Animal, {foreignKey: 'CompanyId'})
db.Animal.belongsTo(db.Company)

db.Company.hasMany(db.Staff, {foreignKey: 'CompanyId'})
db.Staff.belongsTo(db.Company)

db.Company.hasMany(db.Client, {foreignKey: 'CompanyId'})
db.Client.belongsTo(db.Company)

db.Company.hasMany(db.ReportFeed, {foreignKey: 'CompanyId'})
db.ReportFeed.belongsTo(db.Company)

db.Animal.hasMany(db.HealthEvent, { foreignKey: 'AnimalId' });
db.HealthEvent.belongsTo(db.Animal);

db.HealthEvent.hasMany(db.Treatment, { foreignKey: 'HealthEventId' });
db.Treatment.belongsTo(db.HealthEvent);

db.Client.hasMany(db.Sale, { foreignKey: 'ClientId' });
db.Sale.belongsTo(db.Client);

db.Staff.hasMany(db.Task, { foreignKey: 'StaffId' });
db.Task.belongsTo(db.Staff);

module.exports = db;