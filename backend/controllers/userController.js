const userModel = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await userModel.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
