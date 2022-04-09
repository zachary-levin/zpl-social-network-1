const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        }
        // TO-DO: reactions 
        // TO-DO: Virtual called reactionCount that retrieves the 
            //    length of the thought's reactions array field on query
    }
)

module.exports = thoughtSchema;