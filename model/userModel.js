const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "pleace enter the name"]
    },
    email: {
        type: String,
        required: [true, "pleace enter the email"],
        unqie: true,
    },
    password: {
        type: String,
        required: [true, "pleace enter the password"]
    },
    code: {
        type: String,
        required: [true, "pleace enter the code"],
    }
})

module.exports = mongoose.model('User', userSchema)