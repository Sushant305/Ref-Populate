const userModel = require("../models/User");
const postModel = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, content, user } = req.body;
    const existingUser = await userModel.findById(user);

    if (!existingUser) {
      return res.status(404).json({
        error: "User Not Found",
      });
    }

    const post = await postModel.create({
      title,
      content,
      user,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find().populate("user", "name email");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
