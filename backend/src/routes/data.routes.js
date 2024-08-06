const {Router} = require("express");
const getData = require("../controllers/dashboard.controllers");

const dataRouter = Router()
dataRouter.route("/").get(getData)

module.exports = dataRouter