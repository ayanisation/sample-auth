const express = require("express");
const cors = require("cors");
require("./Database/connect");

const home = require("./Routes/home");
const users = require("./Routes/users");
const images = require("./Routes/images");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "500kb", extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/", home);
app.use("/users", users);
app.use("/images", images);

app.listen(PORT, () => {
  console.log(`Active at port ${PORT}`);
});
