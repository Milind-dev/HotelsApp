const mongoose = require('mongoose');
const roomSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    maxCount: {
        type: Number,
        require: true
    },
    phonenumber: {
        type: Number,
        require: true
    },
    rentperday: {
        type: Number,
        require: true
    },
    imageurls: [],
    currentbookings: [],
    type: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

const roomModels = mongoose.model('room', roomSchema);
module.exports = roomModels;