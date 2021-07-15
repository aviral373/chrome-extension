const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./db");
const user = require("./routes/user"); //new addition
const cors = require("cors");
InitiateMongoServer();

const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
