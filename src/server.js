require("dotenv").config()

const app = require("./app")
const db = require("./models")

const PORT = process.env.PORT || 5002


db.sequelize.sync({alter: true}).then(()=>{
    console.log("Database connected")
    app.listen(PORT,()=>{
        console.log(`server running on ${PORT}`);
    })
})
