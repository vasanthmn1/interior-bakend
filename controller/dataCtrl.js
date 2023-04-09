const asyncHandler = require('express-async-handler');
const Data = require('../model/dataMode');
// const User = require('../model/usermodel');

// const getGoals = asyncHandler(async (req, res) => {
//     const goals = await Data.find({ user: req.user.id });
//     res.status(200).json(goals);
// });
const getDataAll = asyncHandler(async (req, res) => {

    const data = await Data.find({ Data });
    res.status(200).json(data);
});
const adddata = asyncHandler(async (req, res) => {

    const { name, email, city, number, message } = req.body


    // if (!name || !email || !city || !number || !message) {
    //     res.status(400);
    //     throw new Error('Pls fill all field');
    // }
    // name: req.body.name,
    // email: req.body.email,
    // city: req.body.city,
    // number: req.body.number,
    // message: req.body.message,
    const addData = await Data.create({
        ...req.body
    });
    res.status(200).json(addData);
});
const deletedata = asyncHandler(async (req, res) => {
    const user = await Data.findByIdAndRemove(req.params.id);
    console.log(user);
    if (!user) {
        res.status(400);
        throw new Error('user not found');
    }

    // if (!req.user) {
    //     res.status(401);
    //     throw new Error('User not found');
    // }


    // await user.remove();

    res.status(200).json({ id: req.params.id });
});
module.exports = {
    adddata,
    getDataAll,
    deletedata,
}