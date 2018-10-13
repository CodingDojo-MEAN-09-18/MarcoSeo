const mongoose = require('mongoose');
const { Schema } = mongoose;


const Animal = new Schema({
    name: {
        type: String,
        required: true,
        min: 0
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    nickname: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Animal', Animal);