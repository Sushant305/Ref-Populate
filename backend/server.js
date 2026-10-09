const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRouters')

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Schema Reference API is running",
  });
});

// Use of router 
app.use("/api/users",userRouter)
app.use("/api/posts",postRouter)

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connect to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on Port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error.message);
  });
  