const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

const authSchema = mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confPass: {
    type: String,
  },
});

// authSchema.methods.generateAuthToken = async function () {
//   try {
//     const newToken = await sign(
//       {
//         _id: this._id,
//         username: this.username,
//       },
//       process.env.SECRET_KEY,
//       { expiresIn: "24h" }
//     );
//     this.token = newToken;
//     await this.save();
//   } catch (e) {
//     console.log(e);
//   }
// };

authSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
      this.confPass = "";
    }
  } catch (e) {
    console.log(e);
  }
  next();
});

const AuthModel = new mongoose.model("user", authSchema);
module.exports = AuthModel;
