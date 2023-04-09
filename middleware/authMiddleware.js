const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const protect = asyncHandler(async (req, res, next) => {

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decodeed = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decodeed.id).select('-password')
            next();
        } catch (error) {
            console.log(error)
            res.status(400)
            throw new Error("not avilable")
        }
    }
    if (!token) {
        res.status(400)
        throw new Error("not token")
    }
})

module.exports = protect