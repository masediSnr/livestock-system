const express = require("express");
const multer = require('multer');

const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});
module.exports = (controller,service)=>{
    const router = express.Router()
    router.post("/",upload.single('file'),controller.create(service))
    router.get("/",controller.getAll(service))
    router.get("/search",controller.search(service))
    router.get("/columns",controller.getColumns(service))
    router.get("/:id/overview",controller.overview(service))
    router.get("/:id",controller.getById(service))
    router.put("/:id",controller.update(service))
    router.delete("/:id",controller.delete(service))

    return router
}
