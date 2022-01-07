const mongoose = require("mongoose");

const paymentCardSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: Number,
        required: true,
        min: 8,
        max: 16,
    },
    expDate: {
        month: {type: String, required: true, min: 2, max: 2},
        year: {type: String, required: true, min: 2, max: 2},
    },
})

module.exports = paymentCardSchema;
