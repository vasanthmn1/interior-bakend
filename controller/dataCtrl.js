const asyncHandler = require('express-async-handler');
const Data = require('../model/dataMode');

const getDataAll = asyncHandler(async (req, res) => {

    const data = await Data.find({ Data });
    res.status(200).json(data);
});
const adddata = asyncHandler(async (req, res) => {


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


    res.status(200).json({ id: req.params.id });
});
module.exports = {
    adddata,
    getDataAll,
    deletedata,
}