const mongoose = require('mongoose');

const AddFitsyUserSchema = mongoose.Schema({
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
    // mobilenumber: {
    //     type: String,
    //     required: false
    // },
    // username: {
    //     type: String,
    //     required: true
    // },
    createdat: {
        type: Date,
        default: Date.now
    },
    updatedat: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('FitsyUsers', AddFitsyUserSchema);