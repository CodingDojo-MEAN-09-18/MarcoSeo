
const mongoose = require('mongoose');
const { Schema } = mongoose;


const Message = new Schema({
    name: {
        type: String,
        required: true,
        min: 0
    },
    message: {
        type: String,
        required: true,
        min: 0
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model('Message', Message);