const express = require("express");
const cors = require("cors");
require("./Database/connect");

const home = require("./Routes/home");
const users = require("./Routes/users");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", home);
app.use("/users", users);

app.listen(PORT, () => {
  console.log(`Active at port ${PORT}`);
});
