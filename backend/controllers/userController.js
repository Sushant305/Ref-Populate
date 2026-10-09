const userModel = require('../models/User')

exports.createUser = async (req,res) => {
    try {
        const {name,email} = req.body;
        const user = await userModel.create({name,email})
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}