
const User = require('../model/userModel')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, code } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("pleace enter the field")
    }


    const alredyUser = await User.findOne({ email })

    if (alredyUser) {
        res.status(400)
        throw new Error("Alredy user this email")
    }

    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(password, salt)

    // const codes = '1122'
    // const verifycode = await User.findOne({ code })

    // if (!verifycode) {
    //     res.status(400)
    //     throw new Error("enter user code")
    // }

    if (code) {

    }
    if (code && code !== process.env.CODE) {
        res.status(400)
        throw new Error("Invalid code")
    }

    const user = await User.create({
        name,
        email,
        password: hashpassword,
        code
    })

    if (user) {
        res.status(200).json(
            { _id: user.id, name: user.name, email: user.email, token: geterterToken(user.id) })
    } else {
        res.status(400)
        throw new Error("Invalid User Data")
    }
})

const loginusers = asyncHandler(async (req, res) => {
    const { email, password, code } = req.body


    const user = await User.findOne({ email })
    const mycode = await User.findOne({ code })


    if (user && (await bcrypt.compare(password, user.password)) && mycode) {
        res.json({
            _id: user.id, name: user.name, email: user.email, token: geterterToken(user.id)
        })

    } else {
        res.status(400)
        throw new Error("email or password or code worng ")
    }
})

const geterterToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "5h" })
}
module.exports = {
    registerUser,
    loginusers
}