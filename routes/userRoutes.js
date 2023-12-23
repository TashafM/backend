const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const cors = require("cors");
const User = require("../models/userModel");
app.use(cors());


router.post("/create-user", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });

    res.status(201).json(userAdded);
  } catch (error) {
    res.send(400).json({ error: error.message });
  }
});

//get all users
router.get("/all-users", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.send(400).json({ error: error.message });
  }
});

//get single user
router.get("/get-user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    res.send(400).json({ error: error.message });
  }
});


//delete a user
router.delete("/delete-user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(deleteUser);
  } catch (error) {
    res.send(400).json({ error: error.message });
  }
});

module.exports = router;
