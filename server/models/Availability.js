const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
    day: {type: Number},
    month: {type: Number},
    year: {type: Number},
    from: {type: String},
    to: {type: String},
}, { toJSON: { virtuals: true } })

module.exports = availabilitySchema;