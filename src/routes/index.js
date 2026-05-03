const router = require("express").Router()
const db = require("../models")
const { sequelize } = require("../config/db")
const baseRoutes = require("./base.routes")
const controller = require("../controllers/base.controller")
const baseService = require("../services/base.service")
const authRoute = require("./authRoute")


router.use("/animals", baseRoutes(controller,{
    create: baseService.create(db.Animal),
    getAll: baseService.getAll(db.Animal),
    getById: baseService.getById(db.Animal),
    update: baseService.update(db.Animal),
    getColumns: baseService.getColumns(db.Animal),
    delete: baseService.delete(db.Animal),
}))

router.use("/feed-log", baseRoutes(controller,{
    create: baseService.create(db.FeedLog),
    getAll: baseService.getAll(db.FeedLog),
    getById: baseService.getById(db.FeedLog),
    update: baseService.update(db.FeedLog),
    getColumns: baseService.getColumns(db.FeedLog),
    delete: baseService.delete(db.FeedLog),
}))
router.use("/company", baseRoutes(controller,{
    create: baseService.create(db.Company),
    getAll: baseService.getAll(db.Company),
    getById: baseService.getById(db.Company),
    update: baseService.update(db.Company),
    getColumns: baseService.getColumns(db.Company),
    delete: baseService.delete(db.Company),
}))
router.use("/animal-movements", baseRoutes(controller,{
    create: baseService.create(db.AnimalMovement),
    getAll: baseService.getAll(db.AnimalMovement),
    getById: baseService.getById(db.AnimalMovement),
    update: baseService.update(db.AnimalMovement),
    getColumns: baseService.getColumns(db.AnimalMovement),
    delete: baseService.delete(db.AnimalMovement),
}))
router.use("/clients", baseRoutes(controller,{
    create: baseService.create(db.Client),
    getAll: baseService.getAll(db.Client),
    getById: baseService.getById(db.Client),
    update: baseService.update(db.Client),
    getColumns: baseService.getColumns(db.Client),
    delete: baseService.delete(db.Client),
}))
router.use("/camps", baseRoutes(controller,{
    create: baseService.create(db.FarmLocation),
    getAll: baseService.getAll(db.FarmLocation),
    getById: baseService.getById(db.FarmLocation),
    update: baseService.update(db.FarmLocation),
    getColumns: baseService.getColumns(db.FarmLocation),
    delete: baseService.delete(db.FarmLocation),
}))
router.use("/health-events", baseRoutes(controller,{
    create: baseService.create(db.HealthEvent),
    getAll: baseService.getAll(db.HealthEvent),
    getById: baseService.getById(db.HealthEvent),
    update: baseService.update(db.HealthEvent),
    getColumns: baseService.getColumns(db.HealthEvent),
    delete: baseService.delete(db.HealthEvent),
}))
router.use("/inventories", baseRoutes(controller,{
    create: baseService.create(db.Inventory),
    getAll: baseService.getAll(db.Inventory),
    getById: baseService.getById(db.Inventory),
    update: baseService.update(db.Inventory),
    getColumns: baseService.getColumns(db.Inventory),
    delete: baseService.delete(db.Inventory),
}))
router.use("/medications", baseRoutes(controller,{
    create: baseService.create(db.Medication),
    getAll: baseService.getAll(db.Medication),
    getById: baseService.getById(db.Medication),
    update: baseService.update(db.Medication),
    getColumns: baseService.getColumns(db.Medication),
    delete: baseService.delete(db.Medication),
}))
router.use("/sales", baseRoutes(controller,{
    create: baseService.create(db.Sale),
    getAll: baseService.getAll(db.Sale),
    getById: baseService.getById(db.Sale),
    update: baseService.update(db.Sale),
    getColumns: baseService.getColumns(db.Sale),
    delete: baseService.delete(db.Sale),
}))
router.use("/staff", baseRoutes(controller,{
    create: baseService.create(db.Staff),
    getAll: baseService.getAll(db.Staff),
    getById: baseService.getById(db.Staff),
    update: baseService.update(db.Staff),
    getColumns: baseService.getColumns(db.Staff),
    delete: baseService.delete(db.Staff),
}))
router.use("/stock-movements", baseRoutes(controller,{
    create: baseService.create(db.StockMovement),
    getAll: baseService.getAll(db.StockMovement),
    getById: baseService.getById(db.StockMovement),
    update: baseService.update(db.StockMovement),
    getColumns: baseService.getColumns(db.StockMovement),
    delete: baseService.delete(db.StockMovement),
}))
router.use("/tasks", baseRoutes(controller,{
    create: baseService.create(db.Task),
    getAll: baseService.getAll(db.Task),
    getById: baseService.getById(db.Task),
    update: baseService.update(db.Task),
    getColumns: baseService.getColumns(db.Task),
    delete: baseService.delete(db.Task),
}))
router.use("/recent-feeds", baseRoutes(controller,{
    create: baseService.create(db.ReportFeed),
    getAll: baseService.getAll(db.ReportFeed),
    getById: baseService.getById(db.ReportFeed),
    update: baseService.update(db.ReportFeed),
    delete: baseService.delete(db.ReportFeed),
    getColumns: baseService.getColumns(db.ReportFeed),
}))
router.use("/treatment", baseRoutes(controller,{
    create: baseService.create(db.Treatment),
    getAll: baseService.getAll(db.Treatment),
    getById: baseService.getById(db.Treatment),
    update: baseService.update(db.Treatment),
    delete: baseService.delete(db.Treatment),
    getColumns: baseService.getColumns(db.Treatment),
}))

router.use("/login", authRoute(controller,{
    login: baseService.login(db.Staff),
}))


module.exports = router