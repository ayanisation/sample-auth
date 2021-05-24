const ImageModel = require("../Models/imageModel");
const express = require("express");

const router = new express.Router();

router.get("/", async (req, res) => {
  try {
    const images = await ImageModel.find();
    res.status(200).json(images);
  } catch (e) {
    res.json({ message: "Unable to fetch images" });
  }
});

router.post("/", async (req, res) => {
  try {
    const img = new ImageModel(req.body);
    await img.save();
    res.status(201).json({ message: "Image uploaded successfully" });
  } catch (e) {
    res.json({ message: e });
  }
});

module.exports = router;
