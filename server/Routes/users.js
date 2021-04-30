const express = require("express");
const AuthModel = require("../Models/authModel");
const bcrypt = require("bcryptjs");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");

dotenv.config();

const router = new express.Router();

const encryptText = (text) => {
  const ciphertext = CryptoJS.AES.encrypt(
    text,
    process.env.SECRET_KEY
  ).toString();
  return ciphertext;
};

const decryptText = (text) => {
  const bytes = CryptoJS.AES.decrypt(text, process.env.SECRET_KEY);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

router.get("/", async (req, res) => {
  try {
    const users = await AuthModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await AuthModel.find();
    const user = users.find((item) => decryptText(item.email) === email);
    if (!user) res.json({ message: "Invalid login credentials" });
    else {
      const isCorrect = await bcrypt.compare(password, user.password);
      if (!isCorrect) res.json({ message: "Incorrect password" });
      else
        res.status(200).json({
          fname: decryptText(user.fname),
          lname: decryptText(user.lname),
          email: decryptText(user.email),
          password: "",
          confPass: "",
        });
    }
  } catch (error) {
    console.log(1);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/signup", async (req, res) => {
  const { email } = req.body;
  try {
    const users = await AuthModel.find();
    const user = users.find((item) => decryptText(item.email) === email);
    if (user) res.json({ message: "Email ID is taken, try another" });
    else {
      if (req.body.password !== req.body.confPass)
        res.json({ message: "Error! Passwords did not match" });
      else {
        const newUser = new AuthModel({
          fname: encryptText(req.body.fname),
          lname: encryptText(req.body.lname),
          email: encryptText(req.body.email),
          password: req.body.password,
          confPass: req.body.confPass,
        });
        await newUser.save();
        res.status(201).json({ ...req.body, password: "", confPass: "" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
