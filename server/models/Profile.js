const mongoose = require("mongoose");
const addressSchema = require('./Address');
const availabilitySchema = require('./Availability');
const paymentCardSchema = require('./paymentCard');

const STORAGE = 'https://placeholder.com/bucket'; //host for profile images

const profileSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    firstName: {type: String, required: true, default: ''},
    lastName: {type: String, required: true, default: ''},
    email: { type: String, required: true, default: ''},
    description: {type: String, required: false, default: ''},
    gender: {type: String, required: true},
    address: addressSchema,
    availability: [availabilitySchema],
    payments: [paymentCardSchema],
    profilePicture: {
        type: String,
        required: false,
        get: p => `${STORAGE}${p}`
    },
    wage: {
        type: Number,
        min: [0, 'Number must be positive, got {VALUE}'],
        get: w => `${w}/hr`
    },
    ratings: {type: [Number], required: false, },
}, { toJSON: { virtuals: true } })

profileSchema.virtual('rating')
    .get(function() {
        const sum = this.ratings.reduce((pv, v) => pv + v);
        return Math.round(sum/this.ratings.length);
    })

profileSchema.virtual('location')
    .get(function() {
        return `${this.address.city}, ${this.address.country}`;
    })

profileSchema.virtual('fullName')
    .get(function() {
        return `${this.firstName} ${this.lastName}`;
    })
    .set(function(v) {
        const [ firstName, lastName ] = v.split(' ');
        this.set({firstName, lastName});
    })

module.exports = Profile = mongoose.model("Profile", profileSchema);