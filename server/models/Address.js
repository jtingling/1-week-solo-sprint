const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    streetNumber: { 
        type: Number, 
        required: true 
    },
    streetName: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    province: { 
        type: String, 
        required: true 
    },
    postalCode: { 
        type: String, 
        required: true 
    },
    country: { 
        type: String, 
        required: true 
    }
}, { toJSON: { virtuals: true } })

module.exports = addressSchema;