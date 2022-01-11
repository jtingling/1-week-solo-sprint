const mongoose = require("mongoose");
const format = require('date-fns/format')
const addressSchema = require('./Address');
const availabilitySchema = require('./Availability');

const STORAGE = 'https://placeholder.com/bucket'; //host for profile images

const profileSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    email: { 
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: false
    },
    gender: {
        type: String, 
        required: true
    },
    address: addressSchema,
    availability: [availabilitySchema],
    profilePicture: {
        type: String,
        required: false,
        get: p => `${STORAGE}${p}`
    },
    wage: {
        type: Number,
        min: [0, 'Number must be positive, got {VALUE}'],
    },
    ratings: {
        type: [Number], 
        required: false, 
    },
}, { toJSON: { virtuals: true } })

profileSchema.methods.bookTime = async function(date, from, to) {
    const timeSlots = this.getAvailabilityByDate(date);
    if (!timeSlots[0].length) {
        return "No available time slots."
    }
    let timeSlot = timeSlots[0].find(slot => slot.from === from && slot.to === to)
    timeSlot.isAvailable = false;
    await this.save();
    return "Time slot booked."
}
profileSchema.methods.getAllBookings = function() {
    const bookings = this.availability.map(slot => {
        let schedule = slot.schedule.map(time => {
            if(!time.isAvailable) {
                return time
            }
        })
        return {
            day: slot.date,
            schedule,
        }
    })
    return bookings.flat();
}
profileSchema.methods.getAvailabilityByDate = function(date) {
    const availableTimeSlots = [];
    const findDate = this.availability.find(slot => slot.date === date);
    findDate.schedule.forEach((slot)=> {
        if (slot.isAvailable) {
            availableTimeSlots.push(slot);
        }
    })
    return [availableTimeSlots, availableTimeSlots.map(time => `${date}: ${time.from} to ${time.to}`)];
}
profileSchema.methods.getAllAvailableDates = function () {
    const availableTimeSlots = this.availability.map( dates => {
        return dates.schedule.map(slot => {
            if (slot.isAvailable) {
                return {
                    date: dates.date,
                    slot,
                }
            }
        })
    })

    return availableTimeSlots.flat().map(time => `${time.date}: ${time.slot.from} to ${time.slot.to}`);
}

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

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile = mongoose.model("Profile", profileSchema);