const express = require("express");
const User = require("../Models/user.model.js");
const bcrypt = require("bcrypt");

const route = express.Router();

route.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const isPresent = await User.findOne({ email });
    if (isPresent) {
      return res.status(404).send("Email Already Exist");
    }
    const hashPassword = await bcrypt.hash(password, 10); // hashing the password
    const userData = new User({ name, email, password: hashPassword });
    await userData.save();
    res.status(201).send("User has been created successfully");
  } catch (error) {
    res.status(404).send(error.message);
    // console.log(req)
  }
});

route.post("/login", async (req, res) => {
  // console.log(req.body)
  const { email, password } = req.body;
  try {
    const isEmailPresent = await User.findOne({ email });
    if (!isEmailPresent) {
      return res.status(404).send("Invalid Email ID");
    }
    const compPass = await bcrypt.compare(password, isEmailPresent.password); //  comparing the password
    if (compPass) {
      // const { password , ...otherdata} = isEmailPresent.toObject()
      res.status(200).send({ message: "Login Success" });
    } else {
      res.status(404).send("Invalid Password");
    }
  } catch (error) {
    res.status(503).send(error.message);
    // console.log(req)
  }
});

route.get("/signup", async (req, res) => {
  try {
    const getSign = await User.find();
    res.status(200).send({ User: getSign });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = route;
