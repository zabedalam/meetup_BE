const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/",async(req, res) => {
    const user =await User.find()
    res.send(user)
});

router.get("/:id",async(req, res) => {
  const user=await User.findById(req.params.id)
  res.send(user)
});

router.post("/createAccount", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send({ user: user});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }

  // res.send("I can post some json")
});

router.put("/", (req, res) => {
  res.send("I can modify the user info");
});

router.delete("/", (req, res) => {
  res.send("I can delete the user");
});

module.exports = router;
