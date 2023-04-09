const mongoose = require('mongoose');

const dataSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: [true, 'please add a city'],
        },
        email: {
            type: String,
            required: [true, 'please add a email'],
        },
        number: {
            type: String,
            required: [true, 'please add a number'],
        },
        message: {
            type: String,
            required: [true, 'please add a message'],
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Data', dataSchema);
