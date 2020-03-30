const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/createAccount", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send({ user: user });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { new: true }
    );
    res.send({updatedUser});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.send({ message: "User deleted", deletedUser });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
