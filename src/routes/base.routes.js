const express = require("express");
module.exports = (controller,service)=>{
    const router = express.Router()
    router.post("/",controller.create(service))
    router.get("/",controller.getAll(service))
    router.get("/columns",controller.getColumns(service))
    router.get("/:id",controller.getById(service))
    router.put("/:id",controller.update(service))
    router.delete("/:id",controller.delete(service))

    return router
}
