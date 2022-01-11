const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({ 
    date: String,
    schedule: [{ from: String, to: String, isAvailable: Boolean}],

}, { toJSON: { virtuals: true } })

module.exports = availabilitySchema;