const mongoose = require('mongoose');

const WorkoutDetailsSchema = mongoose.Schema({
    stepCounts: {
        type: Number,
        required: false
    },
    totalHrs: {
        type: Number,
        required: false,
        max: 24,
        min: 0,
    },
    WorkedDate: {
        type: Date,
        default: Date.now
    },

})

const AddTechnoPhantomUserSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    totalWorkingHrs: {
        type: String,
        default: 0,
        required: false
    },
    createdat: {
        type: Date,
        default: Date.now
    },
    updatedat: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('TechnoPhantomUsers', AddTechnoPhantomUserSchema);