const mongoose = require("mongoose")
const Dashboard = require("../models/dashboard.models")

const getData = async(req, res) => {
    try{
        const data = await Dashboard.find()
        res.status(200).json({data, message: "data fetched successfully."} )
    }catch(error){
        res.status(500).json({message: "something went wrong."})
        console.log("error:", error)
    }
}

module.exports = getData