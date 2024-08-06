const express = require("express")
const cors = require("cors")
const dataRouter = require("./routes/data.routes")


const app = express()

app.use(express.json({limit:"200mb"}))
app.use(cors({origin: process.env.CORS_ORIGIN, credentials: true}))
app.use(express.urlencoded({extended: true, limit: "50mb"}))
app.use(express.static("public"))
app.use("/dashboard", dataRouter)

module.exports = app;       