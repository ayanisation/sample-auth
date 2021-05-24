const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const imgSchema = mongoose.Schema({
  uploader: { type: String },
  image: { type: String },
});

const ImageModel = new mongoose.model("image", imgSchema);

module.exports = ImageModel;
