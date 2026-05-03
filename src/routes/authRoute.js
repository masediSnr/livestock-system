
const express = require("express");
module.exports = (controller,service)=>{
    const router = express.Router()
    router.post("/",controller.login(service))
    return router
}