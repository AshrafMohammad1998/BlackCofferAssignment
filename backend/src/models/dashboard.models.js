const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema({
    end_year: {
        type: String,
        default: ""   
    },
    topic: {
        type: String,
        required: true 
    },
    insight: {
        type: String, 
        required: true 
    },
    url: {
        type: String,
        required: true 
    },
    region: {
        type: String,
        default: "" 
    },
    start_year: {
        type: String, 
        default: ""   
    },
    impact: {
        type: String,
        default: ""
    },
    added: {
        type: String,
        required: true
    },
    published: {
        type: String,
        required: true
    },
    country: {
        type: String,
        default: "" 
    },
    relevance: {
        type: Number,
        required: true 
    },
    pestle: {
        type: String,
        default: "" 
    },
    source: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true 
    },
    likelihood: {
        type: Number,
        required: true 
    },
    intensity: {
        type: Number,
        required: true 
    },
    sector: {
        type: String,
        default: "" 
    }
}, {
    timestamps: true, 
    collection: "data" 
});

const Data = mongoose.model("Data", dashboardSchema);

module.exports = Data;
