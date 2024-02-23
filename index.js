const contact = require("./controller/contact");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api", contact);

app.listen(port, function () {
  console.log(`server nyala di port: ${port}`);
});
