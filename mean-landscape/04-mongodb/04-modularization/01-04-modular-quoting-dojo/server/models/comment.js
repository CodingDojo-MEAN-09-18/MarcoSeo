const mongoose = require('mongoose');
const { Schema } = mongoose;


const Comment = new Schema({
    name: {
        type: String,
        required: true,
        min: 0
    },
    comment: {
        type: String,
        required: true,
        min: 0
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    messages: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }

});


module.exports = mongoose.model('Comment', Comment);