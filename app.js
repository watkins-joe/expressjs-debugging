const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded());

app.use(express.urlencoded({ extended: false }));

app.use(express.statics("public"));

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "/index.htnl"));
});

app.get("/submit", urlencodedParser, (req, res) => {
  const { firstname } = req.body.firstname;
  res.send(firstname);
  res.send("Form submitted successfully");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
